import { Component, OnInit } from '@angular/core';
import { Profile} from "../profile";
import { ProfileService } from "../profile.service";
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 private profileService: ProfileService;
  private profiles: Profile[];
  private errorMessage: string;

  constructor(profileService: ProfileService) {
    this.profileService=profileService;
  }
  ngOnInit() {
    this.getProfiles();
  }
  getProfiles() {
    this.profileService.getUser().subscribe(
      profiles => this.profiles = profiles,
      error => this.errorMessage = <any>error);
  }

}
