import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = '';

  showBackButton$: Observable<boolean> = of(false);
  isAuthenticated$: Observable<boolean> = of(false);

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.authService.isAuthenticated();
    this.showBackButton$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => (event as NavigationEnd).urlAfterRedirects !== '/products/list')
    );
  }

  logout(): void {
    this.authService.logout();
  }

  login(): void {
    this.router.navigate(['/auth/login']);
  }

  backToProductsList(): void {
    this.router.navigate(['/products']);
  }
}
