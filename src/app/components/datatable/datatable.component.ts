import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


// Import custom components
import { AlgoliaService } from '../../shared/services/algolia.service';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { Algolialist } from '../../shared/Interfaces/algolialist.model';


@Component({
  selector: 'app-table',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})

export class DataTableComponent implements OnInit, OnDestroy {

  dataList: Algolialist;
  loading: boolean = true;
  interval: any;

  constructor(private algoliaService: AlgoliaService,
    private modalService: NgbModal) {
  }

  ngOnInit() {
    // start interval when component is initialized call every 10 second.
    this.getData();
    this.interval = setInterval(() => {
      this.getData();
    }, 10000);
  }

  // Call the service.
  getData() {
    this.loading = true;
    this.algoliaService.getAllData().subscribe(response => {
      this.loading = false;
      this.dataList = response;
      this.dataList.hits.reverse();
    }, (err) => {
      this.loading = false;
    });
  }

  // Open the model on click of row table.
  openModel(row) {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = row;
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}






