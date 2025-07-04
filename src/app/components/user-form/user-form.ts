import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user'; // ✅ service
import { UserModel } from '../../model/userModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.html',
})
export class UserFormComponent implements OnInit {
  user: UserModel = { name: '', email: '', address: '' };
  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService // ✅ inject service
  ) {}

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    this.isEdit = !!paramId;

    if (this.isEdit && paramId) {
      this.userService
        .getUserById(+paramId)
        .subscribe((data) => (this.user = data));
    }
  }

  onSubmit(): void {
    const action$ = this.isEdit
      ? this.userService.updateUser(
          +this.route.snapshot.paramMap.get('id')!,
          this.user
        )
      : this.userService.createUser(this.user);

    action$.subscribe(() => this.router.navigate(['/users']));
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
