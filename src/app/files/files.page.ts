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
  first_file: string = '';
  first_name: string = 'бағдарлама екі тілде';
  second_file: string = '';
  second_name: string =
    '«Арнайы және инклюзивті білім беру жағдайында есту қабілеті зақымдалған балаларды оқытудың заманауи әдістері мен технологиялары»';
  third_file: string = '';
  third_name: string =
    'Инклюзивті және арнайы білім беру жағдайында ерекше білім беру қажеттілігі бар балаларды оқыту мен тәрбиелеуді ұйымдастыру';
  four_file: string = '';
  four_name: string =
    'Инклюзивті және арнайы білім беру жағдайында ерекше білім беру қажеттіліктері бар балаларды  мектепке дейінгі ұйымдарда оқыту және тәрбиелеуді ұйымдастыру';
  five_file: string = '';
  five_name: string =
    'БАҒДАРЛАМА, Зияты зақымдалған балаларды оқыту мен тәрбиелеуді';

  ngOnInit(): void {
    fetch('../../assets/files/бағдарлама екі тілде.pdf').then((res) => {
      this.first_file = res.url;
    });
    fetch(
      '../../assets/files/«Арнайы және инклюзивті білім беру жағдайында есту қабілеті зақымдалған балаларды оқытудың заманауи әдістері мен технологиялары».pdf'
    ).then((res) => {
      this.second_file = res.url;
    });
    fetch(
      '../../assets/files/Инклюзивті және арнайы білім беру жағдайында ерекше білім беру қажеттілігі бар балаларды оқыту мен тәрбиелеуді ұйымдастыру.pdf'
    ).then((res) => {
      this.third_file = res.url;
    });
    fetch(
      '../../assets/files/Инклюзивті және арнайы білім беру жағдайында ерекше білім беру қажеттіліктері бар балаларды  мектепке дейінгі ұйымдарда оқыту және тәрбиелеуді ұйымдастыру.pdf'
    ).then((res) => {
      this.four_file = res.url;
    });
    fetch(
      '../../assets/files/БАҒДАРЛАМА, Зияты зақымдалған балаларды оқыту мен тәрбиелеуді.pdf'
    ).then((res) => {
      this.five_file = res.url;
    });
  }
}
