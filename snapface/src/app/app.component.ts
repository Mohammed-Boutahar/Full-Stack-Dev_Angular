import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snape.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnape!: FaceSnap;
  mySnape2!: FaceSnap;

  ngOnInit(){
    this.mySnape = new FaceSnap(
    'S(Py)der',
    'a day in my travelling journey',
    new Date(),
    (Math.floor(Math.random() * (100 - 1 + 1) + 1)),
    'https://lh3.googleusercontent.com/fife/AMPSemdJ2vmHtjZ1meH38APyFuFuxarMaude1vuBSt_I4NGmuxbd_Ptw2jXVOTQ4DL2_dRd3y0afvSW55OyOo1AAcT0psVBOTyDsIk2bwwAwmHPjmIFqpebNA1Z1VZ5KFjMIGGwfk6KKDb6N6a-4wEVtRYytvOR5pKhlTeKyl3tELL0QSH1B9rW_DAB85mDMZVFKj4hWYLWGzMSH0819PPzjBYpcYpS8F1T12fqcpDNHSUU_93XK0anBYu25yesFavgnWcCtC2_yEjAdi9sIGQ0ZJt9AxKnARAK8E62sf6Zant4C29uHjAdXlxzZaQ-lMh9paWrW-VdOJJn71RxsJIsA4GAilpcNWcTQe3tBSgSYe8yWBBsvcZOlnl78rK9ShMeCK_L-w5JJglyZZmAUTk0tXw8oBlf3z8MF5Aearq32MflLcTnCU56d40Kxze3MIM4_2Dncz-bgm9rAuRC6OCyYvOtaONV7UfX4WnCJP2emVM7fgXkSGYIh5eWXrOOwS49Ne9WEhJm5oITNnd4VLMRIf8EOGajdVAkkznEPdzBzEYTxcuRHMLiFQYwxFRIYrOQOhcgZuOoge8ftxni7h3Li9wljftTJzNY5dmiehPftDqyiH17XbPz9adZZQ_IvLHuLIKkFu-jxKKASRb2TZ08roBXCqVvsaGSp3xKinN32rXI7OLgpeJksq6Tz9bo0xlAHh6yPfWy33LbvDOxFaZvyTrzyn9r2Aq2WaXQQXZJoIxH9YleBGjHCT3th2TyCH0igMUK64lmVZ16Y2W3-0dy4GqCKAyJd8aVHSEc8_ZCgjppj-LVZv0BOHlEJnen8yYcbw6v5a3wq0q10q_IATq0KFc4PbwvYzh8I_M6MJakiJS_7AORcySouBZhaQeVXVNSnRvBaRLrPVI1opMCM9zUDDCZXP-XBNdIVvT1NNigp3LpIFYRdGgcMoHBLqGwBve8YsD31taoRlSKayygOKRzJJ9P9R5LaQeK7M8A4yCqQCgqqGdRFI-l8lxogV8uYikU7UvCxIanHmD9Ocg6qYFM83hZNpsXh8oUClC-pZsEzX0UsnNguV76i-lsNxORzUeF9HRwmoTbIqQB5N7-C9bTDzffco5bVmWCP-bp9NXmF35BFFo9GKhKT29kVbxTVs7AbVyWIv2Btur15SXmkxLoL5zwvsr7sWaSvcFE8ZzUU7NJ8Yn0Hja0RTvqmyKs8_jRHGaOWn8tVzl3vEGdpRYdgoRO9v3cuVDdDqSVGycNZmMaHX_Nbj544jbinH86KPe7zpOuoIyI67ISfnv8k5nFddohxH_XXHyj2ZnxY5kgxkoYgsf5YaqfIA0_elR_yyLYdyXfMxbMDzyoODcDvLQFxRzswktKFTmJSJYt407gbfXtxTpwC3p3rBw9FHLvJrxEH00ULpgXFgGWaj9uJ1I6MJS6oRK3eU1AKd06l0UF7C227quTpD2oIi7nufEumbv3PdXJoj5ZRiYQ8Z5s6yiI=w1276-h1168'
    )

    this.mySnape2 = new FaceSnap(
      'Anciant Medina of Fez',
      'a day in my travelling journey',
      new Date(),
      (Math.floor(Math.random() * (100 - 1 + 1) + 1)),
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AAOQEOSk6q4Csu2GK40-tHcrSXCHFqNkqpc1ZDOWibdjYYECYiR43pTtTdeMFyrONvg7gyPqrwSs3MQoJ-y9L380Ip7scEoKpQ=w1140-h1192'
    )
  }
}
