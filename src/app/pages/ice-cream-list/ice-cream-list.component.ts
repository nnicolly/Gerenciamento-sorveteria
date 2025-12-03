import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


import { IceCream } from '../../models/ice-cream.model';
import { IceCreamService } from '../../services/ice-cream.service';
import { IceCreamFormDialogComponent } from '../ice-cream-form-dialog/ice-cream-form-dialog.component';

@Component({
  selector: 'app-ice-cream-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule

  ],
  templateUrl: './ice-cream-list.component.html',
  styleUrl: './ice-cream-list.component.css'
})
export class IceCreamListComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'actions'];
  dataSource = new MatTableDataSource<IceCream>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private iceCreamService: IceCreamService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.dataSource.filterPredicate = (data: IceCream, filter: string) => {
      const value = filter.trim().toLowerCase();
      return (
        data.name.toLowerCase().includes(value) ||
        data.category.toLowerCase().includes(value) ||
        data.description.toLowerCase().includes(value)
      );
    };

    this.loadIceCreams();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadIceCreams(): void {
    this.iceCreamService.getAll().subscribe({
      next: items => this.dataSource.data = items,
      error: () =>
        this.snackBar.open('Erro ao carregar sorvetes', 'Fechar', { duration: 3000 })
    });
  }

  applyFilter(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(IceCreamFormDialogComponent, {
      width: '400px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const { id, ...payload } = result;

        this.iceCreamService.create(result).subscribe({
          next: () => {
            this.snackBar.open('Sorvete criado com sucesso!', 'Fechar', { duration: 3000 });
            this.loadIceCreams();
          },
          error: () =>
            this.snackBar.open('Erro ao criar sorvete', 'Fechar', { duration: 3000 })
        });
      }
    });
  }

  openEditDialog(iceCream: IceCream): void {
    const dialogRef = this.dialog.open(IceCreamFormDialogComponent, {
      width: '400px',
      data: { ...iceCream }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.iceCreamService.update(result).subscribe({
          next: () => {
            this.snackBar.open('Sorvete atualizado com sucesso!', 'Fechar', { duration: 3000 });
            this.loadIceCreams();
          },
          error: () =>
            this.snackBar.open('Erro ao atualizar sorvete', 'Fechar', { duration: 3000 })
        });
      }
    });
  }

  delete(iceCream: IceCream): void {
    if (!iceCream.id) return;
    const ok = confirm(`Excluir o sorvete "${iceCream.name}"?`);
    if (!ok) return;

    this.iceCreamService.delete(iceCream.id).subscribe({
      next: () => {
        this.snackBar.open('Sorvete excluído com sucesso!', 'Fechar', { duration: 3000 });
        this.loadIceCreams();
      },
      error: () =>
        this.snackBar.open('Erro ao excluir sorvete', 'Fechar', { duration: 3000 })
    });
  }
}
