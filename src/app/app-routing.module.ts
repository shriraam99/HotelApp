import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { AddRoomComponent } from './components/add-room/add-room.component'; // Import the AddRoomComponent

const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'rooms-list', component: RoomsListComponent },
  { path: 'add-room', component: AddRoomComponent }, // Add-room route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }