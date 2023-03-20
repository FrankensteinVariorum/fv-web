import React from 'react';
import { Apparatus } from '../../data/spine';
import { Edition } from '../../data/edition';
import EditionDot from '../helpers/EditionDot';

interface TeiAppWrapperProps {
   showVariations: boolean;
   showText: boolean;
   edition?: Edition;
   app: Apparatus;
   firstInApp: boolean;
   onAppClick?: (app: Apparatus) => void,
}

class TeiAppWrapper extends React.Component<TeiAppWrapperProps> {
   onClick = () => {
      if (this.props.showVariations && this.props.onAppClick) {
         this.props.onAppClick(this.props.app);
      }
   }

   render() {
      if(!this.props.showVariations) {
         return <div className='app-wrapper-hidden'>{ this.props.children }</div>;
      }

      const intensity = this.props.app.n || 1;
      const level = (intensity < 5) ? 1 : (intensity < 25) ? 2 : 3;
      const classes = `app-wrapper app-intensity-${level}`;

      // Calculate the dot elements
      const groups = this.props.app.getOtherGroups(this.props.edition!);
      let dotElements: any[] = [];
      let key = 0;
      for(const group of groups) {
         const groupDots = group.editions.map((ed) => <EditionDot small={true} edition={ ed } key={ed.code} />);
         dotElements = dotElements.concat(groupDots);
         dotElements.push(<span className='dot dot-break' key={key}/>);
         key++;
      }

      let dotClasses = 'app-wrapper-dots';
      if(!this.props.showText) {
         dotClasses += ' no-text';
      }

      return (
         <div className={classes} onClick={this.onClick} data-app={this.props.app.id}>
            { this.props.firstInApp ? <div className={dotClasses}>
               { dotElements }
            </div> : '' }
            { this.props.children }
         </div>
      );
   }
}

export default TeiAppWrapper;
