import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ModalUploadComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports:[ModalUploadComponent]
})
export class ComponentesModule { }
