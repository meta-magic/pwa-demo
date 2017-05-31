/**
 * Created by ketangote on 5/29/17.
 */

import {Routes} from "@angular/router";
import {MobilesPageComponent} from "./mobiles.component";


export const appRoutes : Routes =[

  { path: '',   redirectTo: '/mobiles', pathMatch: 'full' },
  { path: 'mobiles', component: MobilesPageComponent }

];
