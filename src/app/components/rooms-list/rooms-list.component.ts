import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  selectedDate: string = ''; // Initialized with an empty string to fix the issue
  rooms: any[] = []; // Initialized with an empty array and replace 'any' with your room model

  constructor(private router: Router) {}

  fetchRooms() {
    // Fetch rooms based on selectedDate and update 'rooms'
    console.log('Fetching rooms for date:', this.selectedDate);
  }

  navigateToAddRoom() {
    this.router.navigate(['/add-room']); // Update with your actual route
  }
}