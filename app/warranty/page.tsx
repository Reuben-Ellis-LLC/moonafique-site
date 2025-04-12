export default function WarrantyPolicyPage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Warranty Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-muted-foreground">
            At Moonafique, we stand behind the quality of our 3D printed
            products. This Warranty Policy outlines the terms and conditions of
            our product warranties and guarantees.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Standard Warranty</h2>
          <p className="text-muted-foreground">
            All our products come with a standard warranty that covers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Manufacturing defects</li>
            <li>Material defects</li>
            <li>Structural integrity issues</li>
            <li>Print quality defects</li>
          </ul>
          <p className="text-muted-foreground">
            The standard warranty period is 12 months from the date of purchase.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Extended Warranty</h2>
          <p className="text-muted-foreground">
            For select products, we offer an extended warranty that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Extends coverage to 24 months</li>
            <li>Includes accidental damage protection</li>
            <li>Provides priority repair service</li>
            <li>Offers replacement options</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Warranty Claims</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Eligibility</h3>
            <p className="text-muted-foreground">
              To be eligible for warranty service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Product must be within warranty period</li>
              <li>Original proof of purchase must be provided</li>
              <li>Product must not show signs of misuse or abuse</li>
              <li>
                Product must not have been modified or repaired by unauthorized
                parties
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Claim Process</h3>
            <p className="text-muted-foreground">To make a warranty claim:</p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Contact our customer service team</li>
              <li>Provide proof of purchase and product details</li>
              <li>Describe the issue and provide photos if possible</li>
              <li>Follow instructions for returning the product if needed</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Warranty Exclusions</h2>
          <p className="text-muted-foreground">The warranty does not cover:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Normal wear and tear</li>
            <li>Damage from improper use or handling</li>
            <li>Damage from exposure to extreme conditions</li>
            <li>Unauthorized modifications or repairs</li>
            <li>{`Cosmetic damage that doesn't affect functionality`}</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Repair and Replacement</h2>
          <p className="text-muted-foreground">
            For valid warranty claims, we will:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Repair the product at no cost</li>
            <li>Replace the product if repair is not possible</li>
            <li>Cover shipping costs for warranty service</li>
            <li>Provide a temporary replacement if available</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our warranty policy or need to make
            a claim, please contact us at:
          </p>
          <p className="text-muted-foreground">
            Email: warranty@moonafique.com
            <br />
            Phone: (555) 123-4567
            <br />
            Address: 123 3D Print Street, Tech City, TC 12345
          </p>
        </section>
      </div>
    </div>
  );
}
