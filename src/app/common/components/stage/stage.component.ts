import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CONFIG_URLS, CONFIG_VISIBILITY, CONFIG_TXT } from '../../constants/site.constants';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  title = CONFIG_TXT.SITE_TITLE;
  date = CONFIG_TXT.EVENT_DATE;
  venue = CONFIG_TXT.VENUE_NAME;
  tickets_button_label = CONFIG_TXT.TICKETS_BUTTON_LABEL;
  tickets_url = CONFIG_URLS.EVENT_BRITE_URL;
  call_for_paper_button_label = CONFIG_TXT.C4P_LABEL;
  call_for_paper_tickets_url = CONFIG_URLS.C4P_URL;
  sponsor_button_label = CONFIG_TXT.SPONSORS_DOSSIER_LABEL
  sponsor_dossier_url = CONFIG_URLS.SPONSORS_DOSSIER_URL;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  getSafeTicketLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.tickets_url);
  }

  getCallForPaperLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.call_for_paper_tickets_url);
  }

  getSponsorDossierLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.sponsor_dossier_url);
  }

  getTicketsLink(): any {
    return this.sanitizer.bypassSecurityTrustUrl(this.tickets_url);
  }

  ngOnInit() {
  }

}
