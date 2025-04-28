import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../../components/header-section/header-section.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ProcessSectionComponent } from '../../components/process-section/process-section.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AutomobileComponent } from '../../components/automobile/automobile.component';
import { AskedQuestionsComponent } from '../../components/asked-questions/asked-questions.component';

@Component({
  selector: 'app-landing-page',
  imports: [HeaderComponent, HeaderSectionComponent, ProcessSectionComponent,AutomobileComponent, StatsComponent,AskedQuestionsComponent, FooterComponent ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
