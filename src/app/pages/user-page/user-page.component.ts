
import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Child } from '../../models/Child';
import { User } from '../../models/User';
import { SaveUserResponse } from '../../models/SaveUserResponse';
import { DialogModalComponent } from '../../components/dialog-modal/dialog-modal.component';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
 
  @Input() formSubmitted = false;
  public NewUser: User;
  public showAddChildDialog: boolean;
  private showModalAfterUpdate = new Subject();
  public scrollbarOptions = { axis: 'yx', theme: 'minimal-dark' };

  @ViewChild('addChildModal', { static: true }) addChildModal: DialogModalComponent;
  
  constructor(   
    private mScrollbarService: MalihuScrollbarService,
    private userService: UserService
   ) 
   { 
     if(this.userService._user == null){
     this.NewUser = new User();
     this.NewUser.Children = new Array<Child>();
     }
     else
     {
       this.NewUser = this.userService._user;
     }

     this.showAddChildDialog = false;
   }

  ngOnInit() {
    this.userService._user = this.NewUser;
  }

  ngAfterViewInit() {
    this.mScrollbarService.initScrollbar('#childrenBodyTable', { axis: 'y', theme: 'dark-thick', scrollButtons: { enable: false } });
  }

  onSubmit(cbForm: NgForm) {    
    if (cbForm.valid) {
      this.userService.saveUser().subscribe(
      (res: SaveUserResponse) => {
        if (res != null && res.IsSuccessful) {
          alert('שמירה בוצעה בהצלחה');
        } 
        else {
          alert('שגיאה');
        }
      }, (err) => {
        alert('שגיאה');
      });
    } 
    else {
      alert('שגיאה');
    }
  }
 
onAddChild() {
    this.addChildModal.mainMessage = 'הוספת ילד';
    this.showAddChildDialog = true;
  }

  onDialogClose(event) {
    this.showAddChildDialog = false;
  }
  
  onAddChildConfirm(child: Child) {
    this.showAddChildDialog = false;    
    this.NewUser.Children.push(child);   
  }

  ngOnDestroy() {
    this.mScrollbarService.destroy('#childrenBodyTable');
  }

}
