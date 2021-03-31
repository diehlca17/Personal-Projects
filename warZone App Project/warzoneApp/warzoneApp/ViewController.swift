//
//  ViewController.swift
//  warzoneApp
//
//  Created by Admin on 12/16/20.
//

import UIKit

class ViewController: UIViewController {
    
    var leftScore = 0
    var rightScore = 0
    
    @IBOutlet weak var leftImageView: UIImageView!
    
    
    @IBOutlet weak var rightImageView: UIImageView!
    
    
    @IBOutlet weak var leftScoreLabel: UILabel!
    
    
    @IBOutlet weak var rightScoreLabel: UILabel!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    
    @IBAction func dealTapped(_ sender: Any) {

        let leftNumber = Int.random(in: 2...14)
        
        let rightNumber = Int.random(in: 2...14)
    
        
        leftImageView.image = UIImage(named: "card\(leftNumber)")
        
        rightImageView.image = UIImage(named: "card\(rightNumber)")
        
        if leftNumber > rightNumber {
            //left side wins
            leftScore += 1
            leftScoreLabel.text = String(leftScore)
        }
        
        if rightNumber > leftNumber {
            //right side wins
            rightScore += 1
            rightScoreLabel.text = String(rightScore)
        }
    }
    
   
}

