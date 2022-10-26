import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { StarModule } from '../core/components/star/star.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../core/components/button/button.module';
import { ReviewService } from '../core/services/review.service';

@NgModule({
  declarations: [ReviewComponent, ReviewFormComponent, ReviewListComponent],
  imports: [CommonModule, StarModule, MatFormFieldModule, MatInputModule, FormsModule, ButtonModule],
  exports: [ReviewComponent],
  providers: [{ provide: ReviewService, useClass: ReviewService }],
})
export class ReviewModule {}
