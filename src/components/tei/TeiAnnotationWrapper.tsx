import React from 'react';
import manicule from '../../assets/images/manicule.svg';

interface TeiAnnotationWrapperProps {
   showAnnotations: boolean;
   annotations: Array<Object>;
   onAnnotationClick?: (annotations: Array<Object>) => void,
}

class TeiAnnotationWrapper extends React.Component<TeiAnnotationWrapperProps, any> {
   onClick = (e) => {
      if (this.props.showAnnotations && this.props.onAnnotationClick) {
         this.props.onAnnotationClick(this.props.annotations)
         e.stopPropagation()
      }
   }

   render() {
      return (
         <>
            <div onClick={this.onClick} style={{
               position: 'absolute',
               width: '4em',
               cursor: 'pointer',
               left: '-5em',
               marginTop: '1em',
               display: 'flex',
               alignItems: 'center',
               borderBottom: '1px solid grey'
               }}>
               <span style={{paddingRight: '.5em', fontStyle: 'italic'}}>{this.props.annotations.length}</span>
               <img src={manicule} style={{width: '40px'}}/>
            </div>
            { this.props.children }
         </>
      );
   }
}

export default TeiAnnotationWrapper;
