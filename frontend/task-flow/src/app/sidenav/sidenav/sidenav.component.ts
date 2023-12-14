import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent {

  constructor(
   private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateToRoute(route: string) {
    this.router.navigate([route], {relativeTo:this.route})
  }

}
