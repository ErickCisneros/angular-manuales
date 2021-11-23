import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const materials: any[] = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
]

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule { }
