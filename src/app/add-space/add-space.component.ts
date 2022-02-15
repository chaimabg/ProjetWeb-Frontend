import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { SpaceService } from '../services/space.service';
import { Space } from '../models/Space';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-add-space',
  templateUrl: './add-space.component.html',
  styleUrls: ['./add-space.component.css']
})
export class AddSpaceComponent implements OnInit {
  user = this.userService.getConnectedUser();

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,
<<<<<<< HEAD
              private spaceService: SpaceService, private userService: UserService) { }
=======
              private spaceService:SpaceService,private userService:UserService) { }
>>>>>>> 0e6714dc11c7797c813e7f44fc58789638edce18
  get form() { return this.addSpaceForm.controls; }

  public addSpaceForm =  this.fb.group({
    name: ['', Validators.required],
    location: ['', Validators.required],
<<<<<<< HEAD
    latitudeMap: [''],
    longitudeMap: [''],
=======
>>>>>>> 0e6714dc11c7797c813e7f44fc58789638edce18
    pictures: ['', [Validators.required]],
    hourOpen: [''],
    hourClose: [''],
    description : [''],
    capacity: ['', Validators.required],
    });
   error: any;
   space: Space = new Space;
<<<<<<< HEAD
   picture: any;

   selectImage(event: any) {
=======
   picture:any;
   submitted: boolean = false;
   selectImage(event:any) {
>>>>>>> 0e6714dc11c7797c813e7f44fc58789638edce18
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.picture = file;
      console.log(this.picture);
    }
  }
   submit(): void{
    const formData = new FormData();
    formData.append('pictures', this.picture);
    const  data = {
      name: this.addSpaceForm.value.name,
      location: this.addSpaceForm.value.location,
<<<<<<< HEAD
      latitudeMap: this.addSpaceForm.value.latitudeMap,
      longitudeMap: this.addSpaceForm.value.longitudeMap,
=======
      latitudeMap: 0,
      longitudeMap: 0,
>>>>>>> 0e6714dc11c7797c813e7f44fc58789638edce18
      hourOpen: this.addSpaceForm.value.hourOpen,
      hourClose: this.addSpaceForm.value.hourClose,
      description: this.addSpaceForm.value.description,
      capacity: this.addSpaceForm.value.capacity,
      pictures: formData
    };

    this.space.name = data.name;
    this.space.location = data.location;
    this.space.latitudeMap = data.latitudeMap;
    this.space.longitudeMap = data.longitudeMap;
    this.space.hourClose = data.hourClose;
    this.space.hourOpen = data.hourOpen;
    this.space.description = data.description;
    this.space.capacity = data.capacity;

    console.log(this.space);

    this.spaceService.spaceToAdd = this.space;
    this.spaceService.pictureToAdd = this.picture;
    this.spaceService.userId = this.user._id;
    this.router.navigateByUrl('/payment').then(r => {});
<<<<<<< HEAD
=======
    // this.spaceService.postSpace(this.space,user._id,this.picture).subscribe(res => {
    //   console.log(res);
    //    this.submitted = true;
    // },(err: any) => {
    //   console.log(err);
    // });
    // if ( !this.error){
    //   this.router.navigateByUrl('/coworkingspaces').then(r => {});
    // }

>>>>>>> 0e6714dc11c7797c813e7f44fc58789638edce18
  }


  ngOnInit(): void {

    if (this.user === null){
      this.router.navigateByUrl('/login').then(r => {
      });
    }

  }

}
