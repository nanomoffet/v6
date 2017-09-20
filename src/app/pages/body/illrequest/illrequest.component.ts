import { Component, EventEmitter, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaService } from 'ng2-dragula';
import * as $ from 'jquery';

@Component({
  selector: 'illrequest',
  templateUrl: './illrequest.component.html',
  styleUrls: ['./illrequest.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IllrequestComponent implements OnInit {
  @Input() SubmitRequest: any;
  @Input() ClearRequest: any;
  @Input() SaveSettings: any;
  @Input() ClearSettings: any;
  @Input() for: any;
  @Input() orderItem: any;
  // depends on form events
  private editfields: boolean = false;
  private FormResults: boolean = false;
  private SettingResults: boolean = false;

    // reactive way.
    customerForm: FormGroup;
    //customer: Customer = new Customer();

    constructor(private fb: FormBuilder, private dragulaService: DragulaService) {
      // destroy existing drake bags.
      const returnBag: any = this.dragulaService.find('returnable-bag');
      const nonReturnBag: any = this.dragulaService.find('nonreturnable-bag');
      const refRequestBag: any = this.dragulaService.find('refRequest-bag');
      if (returnBag !== undefined ) this.dragulaService.destroy('returnable-bag');
      if (nonReturnBag !== undefined ) this.dragulaService.destroy('nonreturnable-bag');
      if (refRequestBag !== undefined ) this.dragulaService.destroy('refRequest-bag');
      // make sure the drag handles only in this class. 
      dragulaService.setOptions('returnable-bag', {
        moves: function (el, container, handle) {
          return handle.className === 'move-link d-none d-md-inline-block'; // return the whole class string for which one you want.     
        }
      });
      dragulaService.setOptions('nonreturnable-bag', {
        moves: function (el, container, handle) {
          return handle.className === 'move-link d-none d-md-inline-block';      
        }
      });
      dragulaService.setOptions('refRequest-bag', {
        moves: function (el, container, handle) {
          return handle.className === 'move-link d-none d-md-inline-block';    
        }
      });

      dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value);    
      console.log("dragula drop Model");
      console.log(dragulaService.dropModel);
      console.log(this.onDropModel(value));
      });
    }

    ngOnInit(){
      this.SubmitRequest = "Submit Request";
      this.ClearRequest = "Clear Request";
      this.SaveSettings = "Publish Settings";
      this.ClearSettings = "Clear Settings";
      this.customerForm = this.fb.group({
        borrower1: null,
        matBibLev: null,
        matFormat:  null,
        titleJournal: null ,
        uniformtitle: null ,
        authcreator: null,
        pubPlace: null,
        edition: null ,
        anyEdition: null ,
        series: null ,
        phydesc: null  ,
        formatOnly: null ,
        pickupLocation: null ,
        isbn1: null ,
        isbn2: null ,
        isbn3: null ,
        issn1: null,
        issn2: null,
        issn3: null,
        oclcnumber: null,
        wherefound: null ,
        needby: null ,
        showdate: null,
        borNotes: null ,
        lenderlist: null ,
        lendList: null,
        lastname: null ,
        firstName: null ,
        email1: null,
        middleNameInitial: null ,
        patLibcardNum: null,
        patAdd1: null ,
        poBoxAptNum: null ,
        city: null ,
        state: null,
        zip: null,
        phone: null,
        volNeeded: null,
        patPaymentOptions: null ,
        oclcmaxCost: null,
        libCCN: null,
        pubName: null,
        borrower1_l: null,
        matBibLev_l: null,
        matFormat_l:  null,
        titleJournal_l: null,
        uniformtitle_l: null,
        authcreator_l: null,
        pubPlace_l: null,
        edition_l: null,
        anyEdition_l: null,
        series_l: null,
        phydesc_l: null ,
        formatOnly_l: null,
        pickupLocation_l: null,
        ISBN_l: null,
        ISSN_l: null,
        oclcnumber_l: null,
        wherefound_l: null,
        needby_l: null,
        showdate_l: null,
        borNotes_l: null,
        lenderList_l: null,
        lendList_l: null,
        lastname_l: null ,
        firstName_l: null,
        phone_l: null,
        email1_l: null,
        middleNameInitial_l: null ,
        patLibcardNum_l: null,
        patAdd1_l: null ,
        poBoxAptNum_l: null ,
        citystatezip_l: null,
        volNeeded_l: null ,
        patPaymentOptions_l: null ,
        oclcmaxCost_l: null ,
        libCCN_l: null,

        //subscribe to the order.
        rl1: null,
        rl2: null,
        rl3: null,
        rl4: null,
        rl5: null,
        rl6: null,
        rl7: null,
        rl8: null,
        rl9: null,
        rl10: null,
        rl11: null,
        rl12: null,
        rl13: null,
        rl14: null,
        rl15: null,
        rl16: null,
        rl17: null,
        rl18: null,
        rl19: null,
        rl20: null,
        rl21: null,
        rl22: null,
        rl23: null,
        rl24: null,
        rl25: null,
        rl26: null,
        rl27: null,
        rl28: null,
        rl29: null,
        rl30: null,
        rl31: null,
        rl32: null,
        rl33: null,
        rl34: null,
        rl35: null,
        

      });     
      console.log(this.customerForm);   

      let startForm = this.ILLData.Returnable;
      

      this.customerForm.valueChanges.debounceTime(1000).subscribe(value => 
        {
          let changeForm = [];
          let reorderedArray = this.ILLData.Returnable.forEach(value => {
            // if current entry.order > previous
            //console.log(value);  
            changeForm.push(value);          
            console.log('reorderedArray');     
                              
            //sessionStorage.setItem('value', JSON.stringify(value));
          })      
          console.log(changeForm); 
        }
      );
      //console.log(this.customerForm.rl1.value);
    }

    ngOnChanges() {

    }
   

    private ILLData = {
      "Returnable": [
            {
                id: "",
                order: 1,
                active: " ",            
                type: "SingleInput",
                values: [
                  {
                    idLabel: "borrower1_l",
                    idFor: "borrower1",
                    label: "Borrower",
                    value: "AAAA Demo Library",
                  },
                ],
            },
            {
                id: "",
                order: 2,
                active: " ",            
                type: "SelectInput",
                values: [
                  {
                    idLabel: "matBibLev_l",
                    idFor: "matBibLev",
                    label: "Mat Bib Lev (Cust SU)",
                    options: [
                          {
                            value: "book",
                            name: "Book",
                            selected: "",
                          },
                          {
                            value: "archXixedMat",
                            name: "Archival Mixed Material",
                            selected: "",
                          },
                          {
                            value: "cpuSoft",
                            name: "Computer Files (e.g. software)",
                            selected: "",
                          },
                          {
                            value: "map",
                            name: "Map",
                            selected: "",
                          },
                          {
                            value: "music",
                            name: "Music",
                            selected: "",
                          },
                          {
                            value: "muStore",
                            name: "Music Store",
                            selected: "",
                          },
                          {
                            value: "nonMusic",
                            name: "Non-musical Sound Recording",
                            selected: "",
                          },
                          {
                            value: "serial",
                            name: "Serial",
                            selected: "",
                          },
                          {
                            value: "visMat",
                            name: "Visual Material",
                            selected: "",
                          },
                            ]
                    },
                ],
            },
            {
                id: "",
                order: 3,
                active: " ",            
                type: "SelectInput",
                values: [
                  {
                    idLabel: "matFormat_l",
                    idFor: "matFormat",
                    label: "Mat Format (Cust SU)",
                    options: [
                          {
                            value: "none",
                            name: "None of the below",
                            selected: "",
                          },
                          {
                            value: "Braille",
                            name: "Braille",
                            selected: "",
                          },
                          {
                            value: "electronic",
                            name: "Electronic",
                            selected: "",
                          },
                          {
                            value: "lgPrint",
                            name: "Large Print",
                            selected: "",
                          },
                          {
                            value: "microform",
                            name: "Microform",
                            selected: "",
                          },                    
                            ]
                    },
                ],
            },

              {
                id: "",
                order: 4,           
                type: "TextAreaInput",
                values: [
                  {
                    idLabel: "titleJournal_l",
                    idFor: "titleJournal",
                    label: "*Title / Journal Title",
                    maxlength: "240",
                    placeholder:" ",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },
            {
                id: "",
                order: 5,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "uniformtitle_l",
                    idFor: "uniformtitle",
                    label: "Uniform Title",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 6,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "authcreator_l",
                    idFor: "authcreator",
                    label: "Author / Creator",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 7,           
                type: "TripleInput",
                values: [
                  {
                    idLabel: "pubPlace_l",
                    label: "Publisher (Place, Name, Date)",               
                    idFor1: "pubPlace",               
                    value1: " ",
                    idFor2: "pubName",               
                    value2: " ",
                    idFor3: "pubName",               
                    value3: " ",
                  },
                ],
            },
            {
                id: "",
                order: 8,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "edition_l",
                    idFor: "edition",
                    label: "Edition",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 9,           
                type: "CheckboxInput",
                values: [
                  {
                    idLabel: "anyEdition_l",
                    idFor: "anyEdition",
                    label: "Any Edition is Acceptable",
                    value: " ",
                  },
                ],
            }, 
            {
                id: "",
                order: 10,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "series_l",
                    idFor: "series",
                    label: "Series",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 11,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "phydesc_l",
                    idFor: "phydesc",
                    label: "Physical Description",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 12,           
                type: "CheckboxInput",
                values: [
                  {
                    idLabel: "formatOnly_l",
                    idFor: "formatOnly",
                    label: "This Format Only",
                    value: " ",
                  },
                ],
            }, 
            {
                id: "",
                order: 13,
                active: " ",            
                type: "SelectInput",
                values: [
                  {
                    idLabel: "pickupLocation_l",
                    idFor: "pickupLocation",
                    label: "Pickup Location",
                    options: [
                          {
                            value: "mainbranch",
                            name: "Main Branch",
                            selected: "",
                          },
                          {
                            value: "dropbox",
                            name: "dropbox",
                            selected: "",
                          },
                          {
                            value: "electronicdept",
                            name: "Electronic department",
                            selected: "",
                          },                  
                            ]
                    },
                ],
            },
            {
                id: "",
                order: 14,           
                type: "TripleInput",
                values: [
                  {
                    idLabel: "ISBN_l",
                    label: "ISBN",               
                    idFor1: "isbn1",               
                    value1: " ",
                    idFor2: "isbn2",               
                    value2: " ",
                    idFor3: "isbn3",               
                    value3: " ",
                  },
                ],
            },
            {
                id: "",
                order: 15,           
                type: "TripleInput",
                values: [
                  {
                    idLabel: "ISSN_l",
                    label: "ISSN",               
                    idFor1: "issn1",               
                    value1: " ",
                    idFor2: "issn2",               
                    value2: " ",
                    idFor3: "issn3",               
                    value3: " ",
                  },
                ],
            },
            {
                id: "",
                order: 16,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "oclcnumber_l",
                    idFor: "oclcnumber",
                    label: "OCLC Number",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 17,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "wherefound_l",
                    idFor: "wherefound",
                    label: "Where was this Found?",
                    value: " ",
                  },
                ],
            },                 
            {
                id: "",
                order: 18,           
                type: "CalendarInput",
                values: [
                  {
                    idLabel: "needby_l",
                    idFor: "needby",
                    label: "Need by",
                    value: " ",
                  },
                ],
            },
              {
                id: "",
                order: 19,           
                type: "CalendarInput",
                values: [
                  {
                    idLabel: "showdate_l",
                    idFor: "showdate",
                    label: "Show Date",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 20,           
                type: "TextAreaInput",
                values: [
                  {
                    idLabel: "borNotes_l",
                    idFor: "borNotes",
                    label: "Borrow's Notes",
                    maxlength: "240",
                    placeholder:" ",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },
            {
                id: "",
                order: 21,           
                type: "TextAreaInput",
                values: [
                  {
                    idLabel: "lenderList_l",
                    idFor: "lenderlist",
                    label: "Lender's List",
                    maxlength: "240",
                    placeholder:" ",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },  
            {
                id: "",
                order: 22,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "lendList_l",
                    idFor: "lendList",
                    label: "Number of Copies needed",
                    value: " ",
                  },
                ],
            },      
            {
                id: "",
                order: 23,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "lastname_l",
                    idFor: "lastname",
                    label: "Last Name",
                    value: " ",
                  },
                ],
            },      
            {
                id: "",
                order: 24,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "firstName_l",
                    idFor: "firstName",
                    label: "First Name",
                    value: " ",
                  },
                ],
            },
              {
                id: "",
                order: 25,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "email1_l",
                    idFor: "email1",
                    label: "Email",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 26,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "middleNameInitial_l",
                    idFor: "middleNameInitial",
                    label: "Middle Name or Initial",
                    value: " ",
                  },
                ],
            },   
            {
                id: "",
                order: 27,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patLibcardNum_l",
                    idFor: "patLibcardNum",
                    label: "Patron's Library Card Number",
                    value: " ",
                  },
                ],
            },   
            {
                id: "",
                order: 28,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patAdd1_l",
                    idFor: "patAdd1",
                    label: "Patron's Address 1",
                    value: " ",
                  },
                ],
            },   
            {
                id: "",
                order: 29,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "poBoxAptNum_l",
                    idFor: "poBoxAptNum",
                    label: "P.O. Box or Apt. #",
                    value: " ",
                  },
                ],
            },   
            {
                id: "",
                order: 30,
                active: " ",           
                type: "TripleInput",
                values: [
                  {
                    idLabel: "citystatezip_l",
                    label: "City, State, Zip",               
                    idFor1: "city",               
                    value1: " ",
                    idFor2: "state",               
                    value2: " ",
                    idFor3: "zip",               
                    value3: " ",
                  },
                ],
            },
            {
                id: "",
                order: 31,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "phone_l",
                    idFor: "phone",
                    label: "*Phone",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 32,           
                type: "CurrencyInput",
                values: [
                  {
                    idLabel: "volNeeded_l",
                    idFor: "volNeeded",
                    label: "Volumes Needed",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 33,           
                type: "SelectInput",
                values: [
                  {
                    idLabel: "patPaymentOptions_l",
                    idFor: "patPaymentOptions",
                    label: "Patron's Payment Options",
                    options: [
                          {
                            value: "cash",
                            name: "Cash",
                            selected: "",
                          },
                          {
                            value: "credit",
                            name: "Credit",
                            selected: "",
                          },                 
                            ]
                    },
                ],
            },  
            {
                id: "",
                order: 34,           
                type: "CurrencyInput",
                values: [
                  {
                    idLabel: "oclcmaxCost_l",
                    idFor: "oclcmaxCost",
                    label: "OCLC Max Cost",
                    value: " ",
                  },
                ],
            },  
            {
                id: "",
                order: 35,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "libCCN_l",
                    idFor: "libCCN",
                    label: "Library of Congress Control Number",
                    value: " ",
                  },
                ],
            },   
      ],
      "NonReturnable": [
            {
                id: "",
                order: 1,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "cust1_l",
                    idFor: "cust1",
                    label: "Customer Field 1",
                    value: "Jane Doe",
                  },
                ],
            },
            {
                id: "",
                order: 2,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "borrower_l",
                    idFor: "borrower",
                    label: "Borrower",
                    value: "Visa, Not Mastercard, and F American Express",
                  },
                ],
            },
            {
                id: "",
                order: 3,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "requestTOptions_l",
                    idFor: "requestTOptions",
                    label: "Request Type Options",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 4,           
                type: "SelectInput",
                values: [
                  {
                    idLabel: "matBibLev_l",
                    idFor: "matBibLev",
                    label: "Mat Bib Lev (Copy Cust SU)",
                    options: [
                          {
                            value: "book",
                            name: "Book",
                            selected: "",
                          },
                          {
                            value: "archXixedMat",
                            name: "Archival Mixed Material",
                            selected: "",
                          },
                          {
                            value: "cpuSoft",
                            name: "Computer Files (e.g. software)",
                            selected: "",
                          },
                          {
                            value: "map",
                            name: "Map",
                            selected: "",
                          },
                          {
                            value: "music",
                            name: "Music",
                            selected: "",
                          },
                          {
                            value: "muStore",
                            name: "Music Store",
                            selected: "",
                          },
                          {
                            value: "nonMusic",
                            name: "Non-musical Sound Recording",
                            selected: "",
                          },
                          {
                            value: "serial",
                            name: "Serial",
                            selected: "",
                          },
                          {
                            value: "visMat",
                            name: "Visual Material",
                            selected: "",
                          },
                            ]
                    },
                ],
            },
            {
                id: "",
                order: 5,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "matBibLev_l",
                    idFor: "matBibLev",
                    label: "Mat Bib Lev (Copy Cust SU)",
                    value: " ",
                  },
                ],
            }, 
            {
                id: "",
                order: 6,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "matFormat_l",
                    idFor: "matFormat",
                    label: "Mat Format (Copy Cust SU)",
                    value: " ",
                  },
                ],
            }, 
            {
                id: "",
                order: 7,           
                type: "TextAreaInput",
                values: [
                  {
                    idLabel: "titleJournal_l",
                    idFor: "titleJournal",
                    label: "*Title / Journal Title",
                    maxlength: "240",
                    placeholder:"what's in your wallet?",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },
            {
                id: "",
                order: 8,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "authcreator_l",
                    idFor: "authcreator",
                    label: "Author / Creator",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 9,           
                type: "TripleInput",
                values: [
                  {
                    idLabel: "ISBN_l",
                    label: "ISBN",               
                    idFor1: "isbn1",               
                    value1: " ",
                    idFor2: "isbn2",               
                    value2: " ",
                    idFor3: "isbn3",               
                    value3: " ",
                  },
                ],
            },
            {
                id: "",
                order: 10,           
                type: "TripleInput",
                values: [
                  {
                    idLabel: "ISSN_l",
                    label: "ISSN",               
                    idFor1: "issn1",               
                    value1: " ",
                    idFor2: "issn2",               
                    value2: " ",
                    idFor3: "issn3",               
                    value3: " ",
                  },
                ],
            },
            {
                id: "",
                order: 11,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "verification_l",
                    idFor: "verification",
                    label: "Verfication",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 12,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "artAuth_l",
                    idFor: "artAuth",
                    label: "Artical Author",
                    value: " ",
                  },
                ],
            },
              {
                id: "",
                order: 13,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "artTitle_l",
                    idFor: "artTitle",
                    label: "Artical Title",
                    value: " ",
                  },
                ],
            }, 
              {
                id: "",
                order: 14,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "artInfo_l",
                    idFor: "artInfo",
                    label: "Article Information (Volume, Issue, Pages):",
                    value: " ",
                  },
                ],
            }, 
              {
                id: "",
                order: 15,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "artDate_l",
                    idFor: "artDate",
                    label: "Artical Date",
                    value: " ",
                  },
                ],
            }, 
              {
                id: "",
                order: 16,           
                type: "CheckboxInput",
                values: [
                  {
                    idLabel: "formatOnly_l",
                    idFor: "formatOnly",
                    label: "This Format Only",
                    value: " ",
                  },
                ],
            }, 
              {
                id: "",
                order: 17,           
                type: "CalendarInput",
                values: [
                  {
                    idLabel: "needby_l",
                    idFor: "needby",
                    label: "Need by",
                    value: " ",
                  },
                ],
            },
              {
                id: "",
                order: 18,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "borNotes_l",
                    idFor: "borNotes",
                    label: "Borrow's Notes",
                    value: " ",
                  },
                ],
            },      
              {
                id: "",
                order: 19,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "lendList_l",
                    idFor: "lendList",
                    label: "Lender's List",
                    value: " ",
                  },
                ],
            },      
              {
                id: "",
                order: 20,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patLastName_l",
                    idFor: "patLastName",
                    label: "Patron's Last Name",
                    value: " ",
                  },
                ],
            },      
              {
                id: "",
                order: 21,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patFirstName_l",
                    idFor: "patFirstName",
                    label: "Patron's First Name",
                    value: " ",
                  },
                ],
            },
              {
                id: "",
                order: 22,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patMidName_l",
                    idFor: "patMidName",
                    label: "Patron's Middle Name",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 23,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patLibcardNum_l",
                    idFor: "patLibcardNum",
                    label: "Patron's Library Card Number",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 24,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patAdd1_l",
                    idFor: "patAdd1",
                    label: "Patron's Address 1",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 25,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patCont1_l",
                    idFor: "patCont1",
                    label: "Patron's Contact 1",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 26,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "patCont2_l",
                    idFor: "patCont2",
                    label: "Patron's Contact 2",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 27,           
                type: "CurrencyInput",
                values: [
                  {
                    idLabel: "patFirstName_l",
                    idFor: "patFirstName",
                    label: "Max Cost",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 28,           
                type: "SingleInput",
                values: [
                  {
                    idLabel: "libCCN_l",
                    idFor: "libCCN",
                    label: "Library of Congress Control Number",
                    value: " ",
                  },
                ],
            },   

      ],
      "ReferenceRequest": [
            {
                id: "",
                order: 1,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "borrow1",
                    label: "Borrower",
                    value: "AAAA Demo Library",
                  },
                ],
            },
            {
                id: "",
                order: 2,           
                type: "CalendarInput",
                values: [
                  {
                    idFor: "needby",
                    label: "Need by",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 3,           
                type: "TextAreaInput",
                values: [
                  {
                    idFor: "subject",
                    label: "*Subject",
                    maxlength: "240",
                    placeholder:"",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },
            {
                id: "",
                order: 4,           
                type: "TextAreaInput",
                values: [
                  {
                    idFor: "lenderList",
                    label: "Lender List",
                    maxlength: "240",
                    placeholder:"",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },
            {
                id: "",
                order: 5,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patFirstName",
                    label: "Patrons First Name",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 6,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patLastName",
                    label: "Patrons Last Name",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 7,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patLibCardNum",
                    label: "Patrons Library Card Number",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 7,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patAdd1",
                    label: "Patrons Address 1",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 8,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patAdd2",
                    label: "Patrons Address 2",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 9,
                active: " ",           
                type: "TripleInput",
                values: [
                  {
                    label: "Patron's City, State, Zip",               
                    idFor1: "patCity",               
                    value1: " ",
                    idFor2: "patState",               
                    value2: " ",
                    idFor3: "patZip",               
                    value3: " ",
                  },
                ],
            },  
            {
                id: "",
                order: 10,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patContact1",
                    label: "Patrons Contact 1",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 11,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patContact2",
                    label: "Patrons Contact 2",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 12,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patProgCourse",
                    label: "Patron's Program and Course",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 13,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "patStatusYear",
                    label: "Patron's Status and Year",
                    value: " ",
                  },
                ],
            },
            {
                id: "",
                order: 14,           
                type: "TextAreaInput",
                values: [
                  {
                    idFor: "titleJournal",
                    label: "Borrower's Notes",
                    maxlength: "240",
                    placeholder:"",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },
      ]
    }

    private snapshotInputElements = {
      "data": [
            {
                id: "",
                order: 1,           
                type: "SingleInput",
                values: [
                  {
                    idFor: "cust1",
                    label: "Customer Field 1",
                    value: "Jane Doe",
                  },
                ],
            },
              {
                id: "",
                order: 4,
                active: "",           
                type: "SelectInput",
                values: [
                  {
                    idFor: "matBibLev",
                    label: "Mat Bib Lev (Copy Cust SU)",
                    options: [
                          {
                            value: "book",
                            name: "Book",
                            selected: "",
                          },
                          {
                            value: "archXixedMat",
                            name: "Archival Mixed Material",
                            selected: "",
                          },
                          {
                            value: "cpuSoft",
                            name: "Computer Files (e.g. software)",
                            selected: "",
                          },
                          {
                            value: "map",
                            name: "Map",
                            selected: "",
                          },
                          {
                            value: "music",
                            name: "Music",
                            selected: "",
                          },
                          {
                            value: "muStore",
                            name: "Music Store",
                            selected: "",
                          },
                          {
                            value: "nonMusic",
                            name: "Non-musical Sound Recording",
                            selected: "",
                          },
                          {
                            value: "serial",
                            name: "Serial",
                            selected: "",
                          },
                          {
                            value: "visMat",
                            name: "Visual Material",
                            selected: "",
                          },
                            ]
                    },
                ],
            },
              {
                id: "",
                order: 7,
                active: "",           
                type: "TextAreaInput",
                values: [
                  {
                    idFor: "titleJournal",
                    label: "*Title / Journal Title",
                    maxlength: "240",
                    placeholder:"what's in your wallet?",
                    cols: "",
                    rows: "",
                    readonly: "",
                  },
                ],
            },
            {
                id: "",
                order: 9,
                active: " ",           
                type: "TripleInput",
                values: [
                  {
                    label: "ISBN",               
                    idFor1: "isbn1",               
                    value1: " ",
                    idFor2: "isbn2",               
                    value2: " ",
                    idFor3: "isbn3",               
                    value3: " ",
                  },
                ],
            },
              {
                id: "",
                order: 11,   
                active: "",        
                type: "CurrencyInput",
                values: [
                  {
                    idFor: "patFirstName",
                    label: "Max Cost",
                    value: " ",
                  },
                ],
            },   
              {
                id: "",
                order: 16, 
                active: "",          
                type: "CheckboxInput",
                values: [
                  {
                    idFor: "formatOnly",
                    label: "This Format Only",
                    value: " ",
                  },
                ],
            }, 
            {
                id: "",
                order: 17,  
                active: "",         
                type: "CalendarInput",
                values: [
                  {
                    idFor: "needby",
                    label: "Need by",
                    value: " ",
                  },
                ],
            },
      ]
    }


    private onDropModel(args) {
      let [bagName, el, target, source] = args;
      console.log('function: onDropModel()');
      console.log(args);
      console.log(bagName, el, target, source );

      // find out which one has changed.
      console.log(args[2].children);
      // loop throught the array.
      for ( var i=0, drag = args[2].children.length; i < drag; i++ ) {
        // gets all input values from now.
        //console.log('For Loop to decide which one is dropped.');
        //console.log(args[2].children[i]);
        //if (args[2].children[i].children[0].children[2].value == args[1].children[0].childNodes[5].value) {          
          switch (args[2].children[i]) {
                case args[2].children[0]:  // first
                      //console.log("You just moved to the First Order");
                      args[2].children[i].children[0].children[2].value = 1;
                      this.ILLData.Returnable[i].order = args[2].children[i].children[0].children[2].value;
                break;

                case args[2].children[drag-1]: //last
                      //console.log("You just moved to the Last Order");
                        args[2].children[i].children[0].children[2].value = args[2].children[i-1].children[0].children[2].value;
                        ++args[2].children[i].children[0].children[2].value;
                        this.ILLData.Returnable[i].order = args[2].children[i].children[0].children[2].value;
                break;
          
                default:  // somewhere in between the first/last.
                        if (args[2].children[i].children[0].children[2].value < args[2].children[i-1].children[0].children[2].value ) {
                            //console.log("Less Than the Previous Drake set number AFTER value.");
                            args[2].children[i].children[0].children[2].value = args[2].children[i-1].children[0].children[2].value;
                            ++args[2].children[i].children[0].children[2].value;
                            this.ILLData.Returnable[i].order = args[2].children[i].children[0].children[2].value;
                        }
                        else if (args[2].children[i].children[0].children[2].value = args[2].children[i-1].children[0].children[2].value ) {
                           // console.log("Equal the Previous Drake set number AFTER value.");
                            args[2].children[i].children[0].children[2].value = args[2].children[i-1].children[0].children[2].value;
                            ++args[2].children[i].children[0].children[2].value;
                            this.ILLData.Returnable[i].order = args[2].children[i].children[0].children[2].value;
                        } 
                        else {
                          //  console.log("keep value it is greater than the previous.");
                        }
                    }
          }
    } 

    private setInput(val) {
      
      // main container.
      var allDrakes = $("#return-loan");
      var AllBlocks = $("#return-loan .drake");
      var InputValues = $('#return-loan .edit-panel input');
      var CheckValues = this.ILLData.Returnable;

      console.log("the whole this object");
      console.log(allDrakes);
      console.log(AllBlocks);
      console.log(InputValues);
      console.log(CheckValues);

      var inputElement = $('#' + val).val();
      console.log("selected input and input.id");
      console.log(inputElement);
      console.log(val);
      
      // the DOM way of Organizing it.
      //AllBlocks.sort(function(a,b){
      //  return a.children[0].children[2].value - b.children[0].children[2].value;
      //}).appendTo(allDrakes);

      //for (var i=0; AllBlocks.length; i++) {
      //  CheckValues[i].order = parseInt(AllBlocks[i].children[0].children[2].value);
      //  console.log(CheckValues[i].order);
      // }

      //example of sorting
      //CheckValues.sort(function(a,b){
      //  return a.order - b.order;
      //}).appendTo(allDrakes);
    }

    private moveBefore (val) {
      // find out what order this is amount the others. check previous, swap order values, then sort.
      // find the new position order/
    }

    private MoveAfter (val) {
      // find out what order this is amount the others. check previous and after.
      console.log(this.dragulaService.find.name);
      // find the new position order/
    }


    private editform() {
        this.editfields = !this.editfields;
    }
    private submitRequest() {
        this.FormResults = true;
    }
    private clearRequest() {
      
    }
    private submitSettings() {
        this.SettingResults = true;
    }
    private clearSettings() {
      
    }
    
}
