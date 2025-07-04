import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user'; // ✅ service
import { UserModel } from '../../model/userModel'; // ✅ model
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
})
export class UserListComponent implements OnInit {
  users: UserModel[] = []; // ✅ correct type

  constructor(
    private userService: UserService, // ✅ inject service
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe((data) => (this.users = data));
  }

  addUser(): void {
    this.router.navigate(['/users/add']);
  }
  editUser(id: number): void {
    this.router.navigate(['/users/edit', id]);
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => this.loadUsers());
    }
  }
}
