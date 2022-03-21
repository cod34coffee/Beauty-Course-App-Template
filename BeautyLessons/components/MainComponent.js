import React, { Component } from 'react';
import AdvisorsD from './AdvisorsDComponent';
import HairCareD from './HairCareDComponent';
import InnerBeautyD from './InnerBeautyDComponent';
import MakeupD from './MakeUpDComponent';
import OutfitD from './OutfitDComponent';
import SkinCareD from './SkinCareDComponent';
import { INNERBEAUTYS} from '../shared/InnerBeauty';
import { HAIRCARES } from '../shared/HairCare';
import { MAKEUPS } from '../shared/Makeup';
import {OUTFITS} from '../shared/Outfit';
import {SKINCARES} from '../shared/SkinCare';
import { ADVISORS } from '../shared/Advisors';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            innerbeautys: INNERBEAUTYS,
            haircares: HAIRCARES,
            makeups: MAKEUPS,
            outfits: OUTFITS,
            skincares: SKINCARES,
            advisors: ADVISORS,

        };
    }

    render() {
        return <AdvisorsD advisors={this.state.advisors} />;
        
    }
}

export default Main;