using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


// Programmer: Castle Diehl
// Updated: March 23, 2021
// Purpose: This program calculates the numerical population after five years at an 
//          increasing percentage variable of 10% per year, using a while loop.  

namespace diehlCensusProjectedPopulationGrowth
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnCalc_Click(object sender, EventArgs e)
        {
            double numYears = 5;                                    // This variable represents the number of years population is increasing.
            double percentIncrease = .10;                           // This variable represents the percentage the population increases per year.
            double population = Convert.ToDouble(txtInput.Text);    // This variable represents the population number. 
            int counter = 1;                                        // This variable serves as a counter in our while loop representing the year accounted for.  


            // This while loop calculates the population increase per year and accumulates until it hits the number
            // of years stored in variable numYears.  

            while (counter <= numYears)
            {
                population = (population * percentIncrease) + population;
                counter = counter + 1;
            }

            txtOutput.Text = (population).ToString("N1"); // This txtbox provides the result of the calculation.  
            
        }

        // Menustrip functionality "Clear"
        private void clearDataToolStripMenuItem_Click(object sender, EventArgs e)
        {
            // These lines of code clear the data entered by the user and the data produced in the output.  

            txtInput.Text = " ";
            txtOutput.Text = " ";
        }

        // Menustrip functionality "Exit"
        private void exitProgramToolStripMenuItem_Click(object sender, EventArgs e)
        {
            // This line of code exits the program when executed.  

            this.Close();
        }
    }
}
