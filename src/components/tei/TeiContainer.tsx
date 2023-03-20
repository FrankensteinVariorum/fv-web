import React, { ReactNode } from 'react';
import { TeiConverter } from '../../tei-processing/tei-converter';
import { Chunk, Edition } from '../../data/edition';
import { Apparatus } from '../../data/spine';
import { VoidTypeAnnotation } from '@babel/types';

interface TeiRenderingProps {
    chunk: Chunk;
    showVariations: boolean;
    showAnnotations: boolean;
    showText: boolean;
    edition: Edition;
    onAppClick?: (app: Apparatus) => void;
    onAnnotationClick?: (annotations: Array<Object>) => void;
}

interface TeiRenderingState {
    elements?: ReactNode[];
}

class TeiRendering extends React.Component<TeiRenderingProps, TeiRenderingState> {
    state = {
        elements: undefined,
    }

    componentDidMount() {
        this.getTeiObjects();
    }

    componentDidUpdate(prevProps: TeiRenderingProps) {
        if(!prevProps || 
            this.props.chunk !== prevProps.chunk || 
            this.props.edition !== prevProps.edition || 
            this.props.showText !== prevProps.showText ||
            this.props.showVariations !== prevProps.showVariations ||
            this.props.showAnnotations !== prevProps.showAnnotations) {
            this.getTeiObjects(); // No matter which property has changed, we need to render everything again
        }
    }

    getTeiObjects = () => {
        const converter = new TeiConverter(this.props.showVariations, this.props.showAnnotations, this.props.showText, this.props.edition, this.props.chunk);
        const elements = this.props.chunk.mainRoots.map((root) => converter.teiToReactElement(root, this.props.onAppClick, this.props.onAnnotationClick));

        this.setState( { elements });
    } 

    render() {
        return (
            <div className="tei-container" style={{position: 'relative'}}>
                { this.state.elements }
            </div>
        );
    }
}

export default TeiRendering;
