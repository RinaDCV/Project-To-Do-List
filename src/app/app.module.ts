
import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { StackComponent } from './stack/stack.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditNoteDialogComponent } from './edit-note-dialog/edit-note-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ArchiveComponent } from './archive/archive.component';
import { TrashComponent } from './trash/trash.component';
import { DeletedStickyComponent } from './deleted-sticky/deleted-sticky.component';
import { ArchivedStickyComponent } from './archived-sticky/archived-sticky.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    StackComponent,
    StickyNoteComponent,
    EditNoteDialogComponent,
    ArchiveComponent,
    TrashComponent,
    DeletedStickyComponent,
    ArchivedStickyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
