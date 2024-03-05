import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import  from '../../assets/files';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './files.page.html',
  styleUrl: './files.page.scss',
})
export class FilesPage implements OnInit {
  files = ['one.pdf', 'two.pdf', 'three.pdf'];
  file: any;
  first_name: string = 'бағдарлама екі тілде';

  ngOnInit(): void {
    fetch('../../assets/files/бағдарлама екі тілде.pdf').then((res) => {
      this.file = res.url;
    });
  }
}
