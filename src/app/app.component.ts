import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'gregoriochiriguaya-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Gregorio Chiriguaya | Web Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Backend, software, developer, web'},
      {name: 'description', content: 'Desarrollador web con 10 años de experiencia en el ámbito laboral, perfilado al desarrollo back-end.'},
    ]);
    
    
    AOS.init(); 

  }
}
