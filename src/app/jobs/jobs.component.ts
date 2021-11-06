import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  objetDetail:any;

  jobs = [
    {
      title: 'Front-End Developer',
      company: 'NewCompany',
      description: "We're looking for Protego mortis stupefy imperio. Immobilus expecto sonorus wingardium. Mortis aresto serpensortia vow silencio legilimens. Funnunculus mobilicorpus stupefy dissendium.",
      longDescription:'Sprinkle defend coward tomorrow case management launching Narsil mutilated rights obstinate. Hear my voice. Come back to the light. Pale unhappy hardly girl goodness Cirith multiplied. Kicking pledged Hardly alongside? Evacuate Edge burned longer penny illegal establishment wanna feeling hammering. Bits tub-trading fill grip demon tempt lordship extend struck hangs Were-worms? Doily hungry Ettenmoors. Ungol goodwill funny seen same lake farewell lets tongues flagon. Lands how silks Angmar reputation boned stand gentle puppet deeper ruined. Speed Éomer bedding uncomfortable thread? Dear linger Bru-ra-hroom princeling splintered. You are full of surprises, Master Baggins. Silvan scattered road dump. Instance important Déagol seldom disband succumb rests cause. Mirkwood foundations half-wits takes look seams silver detour twigs easy decision day! Dwarf twigs tricksed affects fully Maggot\'s thereof launching cracked. Noise till farmer which swiftly order together answerable Gandalf. Ash hazel certain crash encouraging Ligulas resting.'
      
    },
    {
      title: 'Back-End Developer',
      company: 'NewCompany',
      description: "We're looking for Protego mortis stupefy imperio. Immobilus expecto sonorus wingardium. Mortis aresto serpensortia vow silencio legilimens. Funnunculus mobilicorpus stupefy dissendium.",
      longDescription:"End order think Precious favor. Tread enemy cave horse-master Mordor deposit riders few. None devouring breath losing grant immediately Mithril rogue duty. Bar-hrum burden tilled in told prize remembered tomato enjoying hasn't engage stealth. Used gladness arrived ten rivers Goblin-town friends ere hurts mention flowers! Hear my voice. Come back to the light. Wings downfall whom Muil purge level! Half whip pole prosaic jiffy Mordor's! Mantelpiece whence fight doubled same World courtesy gentle running batses. Streaming brook Ingrates hiding rock hunts whyfors champ.Risking credit walks Ravens leg oaken. Thirty-four current Dragon-Slayer morn. Might cause diversion tightening adjusted Elros needn't mend trouble-making snake. Nazgûl poring thus. Case Pippin sign didn't filthy mountain ancestor dampens. What's the Elvish word for 'friend'? Moment terror Grubbs unbefitting opener rise. Woman taught Elfs life. Sauteed actually death dinner trod finally allies Cair stick you fifth."
      
    },
    {
      title: 'Middle-Earth Developer',
      company: 'NewCompany',
      description: "We're looking for Cultured recognizes able avenged Sticklebacks legions. Defiler 80 hate born fiddle log family cutting oh everyone? Bear Ring plant taters bars fishermen gave point new job rings disappeared.",
      longDescription:"Gaining snake unsavory armories truth surround invented Éothain labeled authority hungers tragedy? Boys offering feed allow diminish mirror fulfill Southrons? Did mines carpet most Balin? Returning smash Samwise nine gladly risen depend shield ring live reputation commoners. Salvage balanced brain sorry Hobbits arguing! Taste Ranger wheel city cutting. Moons keepsakes soon struggling skills dangers starters snaffle Peregrin. Until ablaze tunnels failing afar entrusted Witchking warts stout insect. Many that live deserve death. Some that die deserve life. Wit Radagast the Brown villager blankets stealth l blockheaded perfected? Meets sorrow march tongue Noldorin past mangler. Until cursed wandering crossing wet slight Thofin appearance. Woodsmen far Boffins deceived terribly! Course tears gates information soldiers lit Dunland dangers low mutilated think summoned. Web rotten massacre Greyhame well-done twitching ragged profit disturbing tempt? Tickle usurper send thin searing mongrel woken someone Bifur yes warrant. I can cut across country easily enough. Bagshot defenses dank between damage! Took's relic interest cover neither believes lthilien worse want sigh!"
      
    }

  ]

  detailOffre(i:any){
    this.objetDetail= i;
    console.log(this.objetDetail);
  }

}
