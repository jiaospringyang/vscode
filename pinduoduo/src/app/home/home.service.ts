import { Injectable } from "@angular/core";
import { ImageSlider } from "../share/components";

interface GridItem {
    id: number;
    icon: string;
    link: string;
    title: string;
  }

@Injectable()
export class HomeService {
    constructor() {
    }

    private grids: GridItem[] = [
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

    private imageSliders: ImageSlider[] = [{
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

    getGrids(): GridItem[] {
        return this.grids;
    }

    getImageSlides(): ImageSlider[] {
        return this.imageSliders;
    }
}
