import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarModule } from '../core/components/star/star.module';
import { ButtonModule } from '../core/components/button/button.module';

import { ReviewService } from '../core/services/review.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ReviewComponent } from './review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewListItemComponent } from './review-list-item/review-list-item.component';

@NgModule({
  declarations: [ReviewComponent, ReviewFormComponent, ReviewListComponent, ReviewListItemComponent],
  imports: [CommonModule, StarModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, ButtonModule],
  exports: [ReviewComponent],
  providers: [{ provide: ReviewService, useClass: ReviewService }],
})
export class ReviewModule {}
