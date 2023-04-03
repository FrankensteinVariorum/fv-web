import React from 'react';

interface OptionsSelectorProps {
    showVariations: boolean,
    showAnnotations: boolean,
    showText: boolean,

    onVariationChanged: (variation: boolean) => void;
    onAnnotationChanged: (annotation: boolean) => void;
    onTextChanged: (text: boolean) => void;
}

interface OptionsSelectorState {
    showVariations: boolean,
    showAnnotations: boolean,
    showText: boolean,
}

class OptionsSelector extends React.Component<OptionsSelectorProps, OptionsSelectorState> {

    state = {
        showVariations: true,
        showAnnotations: false,
        showText: true,
    }
    
    componentDidUpdate(prevProps: OptionsSelectorProps) {
        if (this.props.showVariations !== this.state.showVariations) {
            this.setState( {showAnnotations: false, showText: false, showVariations: this.props.showVariations });
        }

        if(this.props.showText !== this.state.showText) {
            this.setState( {showAnnotations: false, showVariations: false, showText: this.props.showText });
        }
        
    }

    onVariationChanged = () => {
        const newShow = !this.state.showVariations;
        this.setState( {showAnnotations: false, showText: false, showVariations: newShow });
        this.props.onVariationChanged(newShow);
    }

    onAnnotationChanged = () => {
        const newShow = !this.state.showAnnotations;
        this.setState( {showText: false, showVariations: false, showAnnotations: newShow });
        this.props.onAnnotationChanged(newShow);
    }
    
    onTextChanged = () => {
        const newShowText = !this.state.showText;
        this.setState( {showAnnotations: false, showVariations: false, showText: newShowText });
        this.props.onTextChanged(newShowText);
    }
    
    render() {
        return (
        <div>
            <label className='options-label bold-choose'>CHOOSE OPTIONS</label>
            <label className='options-label'>
                <input
                    name="variation"
                    type="checkbox"
                    checked={this.state.showVariations}
                    onChange={this.onVariationChanged} />
                See Variants
            </label>

            <label className='options-label'>
                <input
                    name="variation"
                    type="checkbox"
                    checked={this.state.showAnnotations}
                    onChange={this.onAnnotationChanged} />
                See Annotations
            </label>
            
            <label className='options-label'>
                <input
                    name="text"
                    type="checkbox"
                    checked={this.state.showText}
                    onChange={this.onTextChanged} />
                See Text
            </label>
        </div>
        );
    }
}

export default OptionsSelector;
