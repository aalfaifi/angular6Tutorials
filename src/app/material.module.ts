import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatMenuModule,
        MatGridListModule,
        MatNativeDateModule,
        ErrorStateMatcher,
        ShowOnDirtyErrorStateMatcher,
        MatButtonToggleModule,MatTabsModule
        

        
    } from '@angular/material';
    import {MatDatepickerModule} from '@angular/material/datepicker';

import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
    declarations: [
      
      ],
  imports: [
    CommonModule,
      MatButtonModule,
      MatCheckboxModule,
      MatSidenavModule,
      LayoutModule,
      MatToolbarModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatOptionModule,
      MatSelectModule,
      MatInputModule,
      MatMenuModule,
      MatGridListModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatButtonToggleModule,
      MatTabsModule,
      
    ],
    exports:[
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        LayoutModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        MatMenuModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatTabsModule
        
    ],
    providers: [
        {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
      ]
    
  
})
export class MaterialModule { }
