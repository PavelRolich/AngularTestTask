import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  loginSubscription$: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loginSubscription$ = this.authService.login(this.loginForm.value as User).subscribe((isSuccess) => {
      if (isSuccess) {
        this.router.navigate(['/products']);
      }
    });
  }

  ngOnDestroy(): void {
    this.loginSubscription$.unsubscribe();
  }
}
