import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'viandas-ya-frontend';

  constructor(private auth: AuthService, private api: ApiService ) {}

  ngOnInit() {
      this.auth.localAuthSetup();
      this.auth.handleAuthCallback();
      this.auth.getTokenAccess();
      this.api.ping$();
    }
}
