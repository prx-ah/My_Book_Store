// import { provideZonelessChangeDetection } from '@angular/core';
// import { TestBed } from '@angular/core/testing';
// import { App } from './app';
// import { Router } from '@angular/router';
// import { Location } from '@angular/common';
// import { routes } from './app.routes';



// describe('App', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [App],
//       providers: [provideZonelessChangeDetection()]
//     }).compileComponents();
//   });

//   it('should navigate to /home and render CatalogProduct', async () => {
//   const router = TestBed.inject(Router);
//   const location = TestBed.inject(Location);
//   const fixture = TestBed.createComponent(App);

//   router.navigateByUrl('/home');
//   await fixture.whenStable();
//   fixture.detectChanges();

//   expect(location.path()).toBe('/home');
//   const compiled = fixture.nativeElement as HTMLElement;
//   expect(compiled.textContent).toContain('Catalog'); // or something from CatalogProduct template
// });
//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(App);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(App);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-book-shop');
//   });
// });
