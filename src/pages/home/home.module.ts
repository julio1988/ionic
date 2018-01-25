import { HomePage, NavigationDetailsPage } from "./home"
import { NgModule } from "@angular/core"
import { IonicPageModule } from "ionic-angular"

@NgModule({
    declarations: [HomePage, NavigationDetailsPage],
    imports:[IonicPageModule.forChild(HomePage), IonicPageModule.forChild(NavigationDetailsPage)],
    exports: [HomePage, NavigationDetailsPage]
})
export class HomePageModule {}
