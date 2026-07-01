import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iDurg Travel';
  mobileMenuOpen = false;

  closeAndNavigate(event: Event, id: string) {
    event.preventDefault();
    this.mobileMenuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback: update hash
      window.location.hash = id;
    }
  }
}
