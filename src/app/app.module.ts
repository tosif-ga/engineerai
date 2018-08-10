// Import core/native modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Import third party modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

// Import all custom components/services/pipes
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/datatable/datatable.component';
import { AlgoliaService } from './shared/services/algolia.service';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    ModalComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce	,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#0000FF',
      secondaryColour: '#0000FF',
      tertiaryColour: '#0000FF'
  }),
    NgbModule.forRoot()
  ],
  providers: [AlgoliaService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
