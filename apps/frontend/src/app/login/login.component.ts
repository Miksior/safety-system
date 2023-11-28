import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'safety-system-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
   ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public invalidCreds = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      username: ['john', Validators.required],
      password: ['J0hnY329!2%', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  public onSubmit() {
    this.submitted = true;
    this.invalidCreds = false;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f['username'].value, this.f['password'].value).subscribe({
      next: (response: any) => {
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['/mysites']);
      },
      error: () => {
        this.loading = false;
        this.invalidCreds = true;
      }
    });
  }
}
