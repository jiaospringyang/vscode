import { Component, OnInit } from "@angular/core";
import { ImageSlider } from "src/app/share/components";
import { Router, ActivatedRoute } from "@angular/router";

interface GridItem {
  id: number;
  icon: string;
  link: string;
  title: string;
}

@Component({
  selector: "app-home-detail",
  templateUrl: "./home-detail.component.html",
  styleUrls: ["./home-detail.component.css"]
})
export class HomeDetailComponent implements OnInit {
  tabLink = "hot";
  grids: GridItem[] = [
    {
      id: 1,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/girlclothes.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 2,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/food.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 3,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/shoes.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 4,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/home.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 5,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 6,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 7,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 8,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 1,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/girlclothes.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 2,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/food.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 3,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/shoes.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 4,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/home.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 5,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 6,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 7,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    },
    {
      id: 8,
      icon: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
      link: "#",
      title: "商品xx促销"
    }
  ];

  imageSliders: ImageSlider[] = [{
    imageLink: "#",
    imageURL: "https://cdn.pinduoduo.com/home/static/img/subject/girlclothes.jpg",
    caption: ""
  },
  {
    imageLink: "#",
    imageURL: "https://cdn.pinduoduo.com/home/static/img/subject/food.jpg",
    caption: ""
  },
  {
    imageLink: "#",
    imageURL: "https://cdn.pinduoduo.com/home/static/img/subject/shoes.jpg",
    caption: ""
  },
  {
    imageLink: "#",
    imageURL: "https://cdn.pinduoduo.com/home/static/img/subject/home.jpg",
    caption: ""
  },
  {
    imageLink: "#",
    imageURL: "https://cdn.pinduoduo.com/home/static/img/subject/sports.jpg",
    caption: ""
  }];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
       console.log("路径", params);
       this.tabLink = params.get("tabLink");
    });
    this.route.queryParamMap.subscribe((params) => {
      console.log("查询", params);
   });
  }


}
