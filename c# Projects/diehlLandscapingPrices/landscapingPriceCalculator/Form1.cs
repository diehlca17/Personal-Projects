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
// Updated: March 7, 2021
// Purpose: The purpose of this program is to calculate the total price of the user's choice of
//          product based on how many feet are bought.  Calculations include tax rate of %7.

namespace diehlAssignment3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }


        private void btnCalc_Click(object sender, EventArgs e)
        {
            // Prices to be held for each product option

            Decimal seeds = 10;
            Decimal mulch = 12;
            Decimal gravel = 14;
            Decimal pavers = 19;
            Double tax = .07;

            // Get value from textboxes

            Decimal x = decimal.Parse(txtNumberFeet.Text);
            Decimal y = decimal.Parse(txtPrice.Text);

            // Calculations based on user inputs

            Decimal totalSeeds = (seeds * x) + ((seeds * x) * ((decimal)tax));
            Decimal totalMulch = (mulch * x) + ((mulch * x) * ((decimal)tax));
            Decimal totalGravel = (gravel * x) + ((gravel * x) * ((decimal)tax));
            Decimal totalPavers = (pavers * x) + ((pavers * x) * ((decimal)tax));

            // If statements to decide which calculation to use

            if (radSeeds.Checked == true)
            {
                lblOutput.Text = "You ordered " + x + " foot of seed for a total of $" + totalSeeds;
            }
            else if (radMulch.Checked == true)
            {
                lblOutput.Text = "You ordered " + x + " foot of mulch for a total of $" + totalMulch;
            }
            else if (radGravel.Checked == true)
            {
                lblOutput.Text = "You ordered " + x + " foot of gravel for a total of $" + totalGravel;
            }
            else if (radPavers.Checked == true)
            {
                lblOutput.Text = "You ordered " + x + " foot of pavers for a total of $" + totalPavers;
            }
        }

        // Change price of textbox input upon radio button clicks

        private void radSeeds_CheckedChanged(object sender, EventArgs e)
        {
            txtPrice.Text = "10";
        }

        private void radMulch_CheckedChanged(object sender, EventArgs e)
        {
            txtPrice.Text = "12";
        }

        private void radGravel_CheckedChanged(object sender, EventArgs e)
        {
            txtPrice.Text = "14";
        }

        private void radPavers_CheckedChanged(object sender, EventArgs e)
        {
            txtPrice.Text = "19";
        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            txtNumberFeet.Text = " ";
            txtPrice.Text = " ";
            lblOutput.Text = " ";
        }
    }
}
