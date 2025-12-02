import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IceCream } from '../../models/ice-cream.model';

@Component({
  selector: 'app-ice-cream-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './ice-cream-form-dialog.component.html',
  styleUrl: './ice-cream-form-dialog.component.css'
})
export class IceCreamFormDialogComponent {

  form: FormGroup;
  isEdit: boolean;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<IceCreamFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IceCream | null
  ) {
    this.isEdit = !!data;

    this.form = this.fb.group({
      id: [data?.id],
      name: [data?.name ?? '', [Validators.required, Validators.minLength(3)]],
      description: [data?.description ?? '', [Validators.required, Validators.minLength(5)]],
      price: [data?.price ?? 0, [Validators.required, Validators.min(0.01)]],
      category: [data?.category ?? '', [Validators.required]]
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
