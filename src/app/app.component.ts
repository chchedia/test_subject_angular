import { Component, OnInit, PLATFORM_INITIALIZER } from '@angular/core';
import { UsersService } from './services/users.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users = [];
  loading = true;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsersList()
      .pipe(finalize(() => this.loading = false))
      .subscribe(users => this.users = users);
  }
}
