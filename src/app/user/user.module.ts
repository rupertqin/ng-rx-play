import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UserService } from './user.service';
export * from './user.service';

@NgModule({
  // providers: [UserService],
	imports: [
    CommonModule
  ],
	// exports: [UserService]
})
export class UserModule {
}
