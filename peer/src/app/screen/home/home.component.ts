import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { BackendService } from '../../service/backend.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  clientNum : Number = 0;

  backend: BackendService = inject(BackendService);

  constructor(){
    this.clientNum = this .backend.connectPeer();
  }

}
