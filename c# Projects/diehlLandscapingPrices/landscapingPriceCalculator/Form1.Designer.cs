namespace diehlAssignment3
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.radSeeds = new System.Windows.Forms.RadioButton();
            this.radMulch = new System.Windows.Forms.RadioButton();
            this.radGravel = new System.Windows.Forms.RadioButton();
            this.radPavers = new System.Windows.Forms.RadioButton();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.lblNumberFeet = new System.Windows.Forms.Label();
            this.lblPrice = new System.Windows.Forms.Label();
            this.txtNumberFeet = new System.Windows.Forms.TextBox();
            this.txtPrice = new System.Windows.Forms.TextBox();
            this.btnCalc = new System.Windows.Forms.Button();
            this.lblOutput = new System.Windows.Forms.Label();
            this.btnClear = new System.Windows.Forms.Button();
            this.picLandScape = new System.Windows.Forms.PictureBox();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picLandScape)).BeginInit();
            this.SuspendLayout();
            // 
            // radSeeds
            // 
            this.radSeeds.AutoSize = true;
            this.radSeeds.Location = new System.Drawing.Point(30, 41);
            this.radSeeds.Name = "radSeeds";
            this.radSeeds.Size = new System.Drawing.Size(55, 17);
            this.radSeeds.TabIndex = 0;
            this.radSeeds.TabStop = true;
            this.radSeeds.Text = "Seeds";
            this.radSeeds.UseVisualStyleBackColor = true;
            this.radSeeds.CheckedChanged += new System.EventHandler(this.radSeeds_CheckedChanged);
            // 
            // radMulch
            // 
            this.radMulch.AutoSize = true;
            this.radMulch.Location = new System.Drawing.Point(30, 74);
            this.radMulch.Name = "radMulch";
            this.radMulch.Size = new System.Drawing.Size(54, 17);
            this.radMulch.TabIndex = 1;
            this.radMulch.TabStop = true;
            this.radMulch.Text = "Mulch";
            this.radMulch.UseVisualStyleBackColor = true;
            this.radMulch.CheckedChanged += new System.EventHandler(this.radMulch_CheckedChanged);
            // 
            // radGravel
            // 
            this.radGravel.AutoSize = true;
            this.radGravel.Location = new System.Drawing.Point(30, 110);
            this.radGravel.Name = "radGravel";
            this.radGravel.Size = new System.Drawing.Size(56, 17);
            this.radGravel.TabIndex = 2;
            this.radGravel.TabStop = true;
            this.radGravel.Text = "Gravel";
            this.radGravel.UseVisualStyleBackColor = true;
            this.radGravel.CheckedChanged += new System.EventHandler(this.radGravel_CheckedChanged);
            // 
            // radPavers
            // 
            this.radPavers.AutoSize = true;
            this.radPavers.Location = new System.Drawing.Point(30, 145);
            this.radPavers.Name = "radPavers";
            this.radPavers.Size = new System.Drawing.Size(58, 17);
            this.radPavers.TabIndex = 3;
            this.radPavers.TabStop = true;
            this.radPavers.Text = "Pavers";
            this.radPavers.UseVisualStyleBackColor = true;
            this.radPavers.CheckedChanged += new System.EventHandler(this.radPavers_CheckedChanged);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.radPavers);
            this.groupBox1.Controls.Add(this.radSeeds);
            this.groupBox1.Controls.Add(this.radGravel);
            this.groupBox1.Controls.Add(this.radMulch);
            this.groupBox1.Location = new System.Drawing.Point(114, 77);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(160, 207);
            this.groupBox1.TabIndex = 4;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Products";
            // 
            // lblNumberFeet
            // 
            this.lblNumberFeet.AutoSize = true;
            this.lblNumberFeet.Location = new System.Drawing.Point(310, 96);
            this.lblNumberFeet.Name = "lblNumberFeet";
            this.lblNumberFeet.Size = new System.Drawing.Size(80, 13);
            this.lblNumberFeet.TabIndex = 5;
            this.lblNumberFeet.Text = "Number of Feet";
            // 
            // lblPrice
            // 
            this.lblPrice.AutoSize = true;
            this.lblPrice.Location = new System.Drawing.Point(317, 157);
            this.lblPrice.Name = "lblPrice";
            this.lblPrice.Size = new System.Drawing.Size(73, 13);
            this.lblPrice.TabIndex = 6;
            this.lblPrice.Text = "Price per Foot";
            // 
            // txtNumberFeet
            // 
            this.txtNumberFeet.Location = new System.Drawing.Point(440, 93);
            this.txtNumberFeet.Name = "txtNumberFeet";
            this.txtNumberFeet.Size = new System.Drawing.Size(100, 20);
            this.txtNumberFeet.TabIndex = 7;
            // 
            // txtPrice
            // 
            this.txtPrice.Location = new System.Drawing.Point(440, 157);
            this.txtPrice.Name = "txtPrice";
            this.txtPrice.Size = new System.Drawing.Size(100, 20);
            this.txtPrice.TabIndex = 8;
            // 
            // btnCalc
            // 
            this.btnCalc.Location = new System.Drawing.Point(301, 202);
            this.btnCalc.Name = "btnCalc";
            this.btnCalc.Size = new System.Drawing.Size(169, 82);
            this.btnCalc.TabIndex = 9;
            this.btnCalc.Text = "Compute Total";
            this.btnCalc.UseVisualStyleBackColor = true;
            this.btnCalc.Click += new System.EventHandler(this.btnCalc_Click);
            // 
            // lblOutput
            // 
            this.lblOutput.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.lblOutput.Location = new System.Drawing.Point(111, 323);
            this.lblOutput.Name = "lblOutput";
            this.lblOutput.Size = new System.Drawing.Size(638, 61);
            this.lblOutput.TabIndex = 10;
            // 
            // btnClear
            // 
            this.btnClear.Location = new System.Drawing.Point(506, 202);
            this.btnClear.Name = "btnClear";
            this.btnClear.Size = new System.Drawing.Size(172, 82);
            this.btnClear.TabIndex = 11;
            this.btnClear.Text = "Clear";
            this.btnClear.UseVisualStyleBackColor = true;
            this.btnClear.Click += new System.EventHandler(this.btnClear_Click);
            // 
            // picLandScape
            // 
            this.picLandScape.Image = global::diehlAssignment3.Properties.Resources.landscape2;
            this.picLandScape.Location = new System.Drawing.Point(572, 12);
            this.picLandScape.Name = "picLandScape";
            this.picLandScape.Size = new System.Drawing.Size(205, 169);
            this.picLandScape.TabIndex = 12;
            this.picLandScape.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(192)))), ((int)(((byte)(255)))), ((int)(((byte)(192)))));
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.picLandScape);
            this.Controls.Add(this.btnClear);
            this.Controls.Add(this.lblOutput);
            this.Controls.Add(this.btnCalc);
            this.Controls.Add(this.txtPrice);
            this.Controls.Add(this.txtNumberFeet);
            this.Controls.Add(this.lblPrice);
            this.Controls.Add(this.lblNumberFeet);
            this.Controls.Add(this.groupBox1);
            this.Name = "Form1";
            this.Text = "Larry\'s Landscaping";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.picLandScape)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.RadioButton radSeeds;
        private System.Windows.Forms.RadioButton radMulch;
        private System.Windows.Forms.RadioButton radGravel;
        private System.Windows.Forms.RadioButton radPavers;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Label lblNumberFeet;
        private System.Windows.Forms.Label lblPrice;
        private System.Windows.Forms.TextBox txtNumberFeet;
        private System.Windows.Forms.TextBox txtPrice;
        private System.Windows.Forms.Button btnCalc;
        private System.Windows.Forms.Label lblOutput;
        private System.Windows.Forms.Button btnClear;
        private System.Windows.Forms.PictureBox picLandScape;
    }
}

