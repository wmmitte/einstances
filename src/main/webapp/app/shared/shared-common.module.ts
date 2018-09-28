import { NgModule } from '@angular/core';

import { EinstancesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EinstancesSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EinstancesSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EinstancesSharedCommonModule {}
