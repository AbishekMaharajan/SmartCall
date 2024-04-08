import { NgModule, ModuleWithProviders} from '@angular/core';

@NgModule()
export class UtilityModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UtilityModule,

            providers: []
        };
    }
}
