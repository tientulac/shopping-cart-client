import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AppService } from 'src/app/utils/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: FormGroup;
  @Input() countItemInput: number; 
  cartItem: number;

  constructor(
    public titleService: Title,
    public spinner: NgxSpinnerService,
    public modalService: NgbModal,
    public toastr: ToastrService,
    public appService: AppService,
  ) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.countItemInput = changes.countItemInput.currentValue;
    this.getCount();
  }
  
  getCount() {
    document.getElementById("cartItem").innerHTML = this.countItemInput.toString();
  }

  logout() {
    this.appService.logout();
  }

  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  closeResult: string;
  submitted: boolean;
  checkInsert: boolean;
  titleModal: string;
  open(content, sizm, type, Data) {
    this.submitted = false;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: sizm })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );

      if(type=="Add"){
        this.checkInsert = true;
        this.titleModal = "Cart item";
      }
  }
}
