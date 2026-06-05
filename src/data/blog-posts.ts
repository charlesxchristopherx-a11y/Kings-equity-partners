export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-are-tax-deed-surplus-funds",
    title: "What Are Tax Deed Surplus Funds and Why Are They Being Held?",
    excerpt:
      "When a property sells at a tax deed auction for more than the taxes owed, the excess doesn't vanish. Here's what happens to it — and who has the legal right to claim it.",
    content: `
When a property goes to a tax deed auction, it's typically because the owner failed to pay property taxes. The sale is meant to recover the amount owed to the county. But sometimes — especially in hot real estate markets — the property sells for significantly more than the tax debt.

That excess is called **tax deed surplus funds**.

## Who Holds the Money?

After the sale, the Clerk of Court in the county where the property is located holds the surplus funds. They are required to notify the former property owner (or their legal representatives) that money is being held on their behalf.

This notice is sent by mail and has strict timing requirements. In Florida, under **Florida Statute § 197.582**, the former owner has **120 days from the date of that notice** to file a claim.

## Why Is the Money Being Held Instead of Returned?

The short answer: the Clerk can't just give the money back without verification. The law requires the former owner to affirmatively claim it. The Clerk must confirm the claimant is the rightful owner of record at the time of the sale, and that no other parties have a superior lien claim.

If multiple parties claim the same funds — for example, a junior lienholder and the former owner both file — the Clerk may not disburse until the competing claims are resolved.

## What Stops People From Claiming?

This is the most tragic part of the surplus recovery problem. Most former property owners **never receive the notice**, or don't understand it, or receive it too late. Reasons include:

- The property was in the owner's name but they moved and didn't update their mailing address
- The notice was sent to a tax deed sale service or lender who didn't forward it
- The owner passed away and heirs didn't know they were owed money
- The notice was mislabeled as junk mail

According to industry estimates, **less than 5% of surplus funds are ever claimed by the former owners**. The rest escheat to the county after the statutory deadline passes.

## What Can Be Done?

If you believe you are owed surplus funds, or if you're a family member of someone who may have been owed funds, you can file a claim directly with the Clerk of Court. Alternatively, a third party can file on your behalf using an **Assignment of Beneficial Interest**, which transfers your right to the surplus to the assignee in exchange for a contingency fee.

The 120-day window is firm. Missing it typically means losing the right to the funds permanently.

If you'd like a free assessment of whether you may be owed surplus funds from a Florida property, complete our contact form and we'll review the public records at no cost.
    `.trim(),
    author: "King's Equity Partners, LLC",
    date: "2026-04-01",
    readTime: "5 min",
    category: "Education",
    tags: ["tax deed", "surplus funds", "property taxes"],
  },
  {
    slug: "the-120-day-deadline",
    title: "The 120-Day Deadline: Why Time Is Critical in Surplus Recovery",
    excerpt:
      "Florida law gives surplus claimants exactly 120 days from the Clerk's notice to file. Here's what happens if you miss that window — and how to avoid it.",
    content: `
Florida Statute § 197.582 is clear: surplus funds must be claimed within **120 days of the Clerk's mailing of the Notice of Surplus**. That deadline is not a suggestion. It's a firm statutory requirement, and the consequences of missing it are severe.

## What Happens If You Miss the 120-Day Window?

Once the 120-day period expires, the Clerk is required to turn the surplus funds over to the county. The former owner's legal right to the money is extinguished. There is no informal process to reinstate the claim, and courts generally cannot extend the deadline once it has passed.

This means: no notice, no hearing, no appeal. The money is gone.

## Why Do So Many People Miss It?

The problem is rarely negligence on the part of the former owner. In our experience, most missed deadlines happen because:

**The notice was never received.** Clerks send notice by mail to the last known address of the titleholder of record. If that address is stale — due to a old deed, a loan servicer address, or a third-party interest — the notice never arrives.

**The notice was misidentified.** We've seen cases where the notice was addressed to the property owner but delivered to a former lender's default address, where it was discarded.

**The recipient didn't understand it.** Even when notice is received, technical legal language can make it unclear that money is being held and a claim must be filed.

**The owner had passed away.** Heirs often don't know they're owed funds until long after the deadline has passed.

## How We Track Deadlines

For every lead in our pipeline, we calculate the 120-day deadline from the date of the Clerk's Notice of Surplus. Leads within 14 days of the deadline are flagged red on our dashboard. This urgency-driven workflow ensures no claim is filed late.

If you're unsure whether a deadline has passed for a property you care about, contact us immediately. Time is the one variable we cannot recover.
    `.trim(),
    author: "King's Equity Partners, LLC",
    date: "2026-04-08",
    readTime: "4 min",
    category: "Education",
    tags: ["120 day deadline", "surplus funds", "property taxes"],
  },
  {
    slug: "can-you-file-a-claim-yourself",
    title: "Can I File a Surplus Claim Myself? What You Need to Know",
    excerpt:
      "The short answer is yes — but the process has hidden risks, tight deadlines, and procedural traps that trip up most filers. Here's a realistic look at doing it alone.",
    content: `
The question we hear most often: *"Can't I just file the claim myself?"*

The honest answer is: yes, you can. The Clerk's office will accept a properly filed claim from the former owner at no cost. There is no requirement that you hire anyone.

But "can" and "should" are different questions. Here's what the self-filing process actually looks like in Florida.

## The Basic Steps

To file a surplus claim yourself, you would:

1. Obtain the **Assignment of Beneficial Interest** form (or similar) from the Clerk's office
2. Complete it with the correct property address, case number, surplus amount, and your identity as the former owner
3. Have the document **notarized**
4. Mail or deliver the original to the Clerk of Court before the 120-day deadline
5. Follow up with the Clerk to confirm receipt and track the disbursement

That sounds straightforward. The complications arise in steps 2, 3, and 5.

## Common Pitfalls in Self-Filing

**Wrong claimant identity.** If there were multiple owners of record, or if the property was held in a trust or LLC, the correct claimant may not be the person you assume. Filing under the wrong identity can result in rejection or delay.

**Junior lienholder complications.** If the title search reveals a junior lienholder — such as a subordinate mortgage or a judgment lien — that lienholder may have a legal right to the funds before you do. Filing without understanding the lien structure can result in a competing claim being filed against you.

**Incomplete documentation.** Some Clerks have specific form requirements. A missing field, a wrong case number, or an unstamped notarization can result in the entire packet being returned — and time is already running against you.

**Clerk follow-up.** After filing, the Clerk may take 30–90 days to process. Without an established relationship or knowledge of the process, follow-up calls may go unanswered.

## What a Third-Party Filer Brings

When we file on behalf of a client, we handle:

- A professional title search to confirm the correct claimant and lien status
- Complete document preparation with accurate case information
- Notary coordination for wet-ink signatures
- Direct follow-up with the Clerk's office throughout the processing period
- Split disbursement coordination so you receive your funds directly

Our fee is a reasonable contingency — payable only after we recover money for you. If we don't succeed, you owe nothing.

Whether you file yourself or work with a firm, the most important thing is: **don't let the 120 days pass without acting.**
    `.trim(),
    author: "King's Equity Partners, LLC",
    date: "2026-04-15",
    readTime: "6 min",
    category: "Education",
    tags: ["self-filing", "surplus funds", "property taxes"],
  },
  {
    slug: "how-florida-split-disbursement-protects-you",
    title: "How Florida's Split Disbursement Protects You",
    excerpt:
      "Florida Clerks of Court can issue two checks — one for you, one for the filer. Here's why that matters and how it eliminates the biggest risk in surplus recovery.",
    content: `
One of the most important protections Florida law provides for surplus claimants is the **split disbursement** mechanism under Florida Statute § 197.582.

When a surplus claim is approved, the Clerk doesn't have to send all the money to the filer and hope they pass the client's share along. Instead, the Clerk can — and in many Florida counties, routinely does — issue **two separate checks**:

- **75%** to the former owner (or their assigned beneficiary)
- **25%** to the third-party filer (if an Assignment of Beneficial Interest is on file)

## Why This Matters

The traditional risk in surplus recovery — and the reason many people are understandably cautious — is that a company or individual files the claim, receives the full disbursement, and then has to be trusted to remit the client's share.

That risk is real. In other states or other arrangements, it can take weeks or months to recover your portion, and in extreme cases, disputes arise about the amount owed.

**Split disbursement eliminates that risk entirely.**

When the Clerk cuts two separate checks, the filer never touches the client's money. The former owner receives their 75% directly from the county, and the filer receives their 25% directly from the county. There's no intermediation, no waiting for a wire transfer, and no dispute about amounts.

## How It Works

When we file a claim on your behalf, the Assignment of Beneficial Interest we prepare includes a **Split Disbursement Directive**. This instructs the Clerk to issue two checks. We provide our firm's information for the 25% check and your information for the 75% check.

In counties where the Clerk's standard procedures don't include split disbursement, we handle remitting your share within 10 business days of our receipt, via certified funds or wire. But the split disbursement option is available in most Florida counties and we request it in every case where it's offered.

## What This Means for You

When you're evaluating whether to work with a surplus recovery firm, ask specifically: **"Do you use split disbursement?"** If the answer is no, that's a meaningful gap in consumer protection. Our firm uses split disbursement in every applicable case. It's part of our standard operating procedure and it's one of the clearest ways we demonstrate that our interests are aligned with yours.
    `.trim(),
    author: "King's Equity Partners, LLC",
    date: "2026-04-22",
    readTime: "5 min",
    category: "Education",
    tags: ["split disbursement", "surplus funds", "property taxes"],
  },
  {
    slug: "what-does-a-junior-lienholder-mean-for-my-claim",
    title: "What Does a Junior Lienholder Mean for My Surplus Claim?",
    excerpt:
      "Junior lienholders can complicate a surplus claim. Here's what the term means, how it affects your recovery, and why a professional title search matters before filing.",
    content: `
If you've begun looking into filing a surplus claim, you've probably encountered the phrase "junior lienholder" and wondered what it means for your situation.

Let's break it down in plain terms.

## What Is a Lienholder?

A lienholder is an entity — typically a lender, a government agency, or a judgment creditor — that has a legal claim recorded against your property. When the property is sold, these claims must be paid in order of their priority.

The most senior lien is typically the first mortgage recorded against the property. Junior liens are those recorded after the first mortgage, such as second mortgages, home equity lines of credit, mechanic's liens, or judgments.

## How Liens Affect Surplus Funds

Here's how it works in practice:

When a property sells at a tax deed auction, the sale proceeds are distributed in a specific order. The first mortgage holder is paid first, then any other lienholders in order of their priority. Only after all lienholders are satisfied does any surplus flow to the former owner.

In a typical scenario, the surplus exists precisely because the mortgage was foreclosed but the property sold for more than the outstanding loan balance. In that case, the surplus belongs to the former owner — their loan was paid off in full and the excess is theirs.

However, if there are **junior liens** — for example, a second mortgage or a judgment lien — those lienholders may have the legal right to make a competing claim on the surplus before it reaches the former owner.

## What This Means for Your Claim

If our title search reveals junior lienholders, we evaluate:

- **The amount of the junior liens relative to the surplus.** If junior liens exceed the surplus, the former owner may receive nothing after those liens are paid.
- **The validity and status of the lien.** Some junior liens may have been satisfied but not formally released from the record.
- **Whether the lienholder will file a competing claim.** In Florida, a junior lienholder can file a claim for the surplus, and if they do, the Clerk will typically hold the funds until the competing claims are resolved.

This is precisely why we obtain a professional title search before filing. The county's own posted title document gives us an initial picture, but it doesn't substitute for a full 50-year chain of title search with professional liability coverage.

## The Bottom Line

Junior lienholders don't necessarily mean you can't recover surplus funds. But they require careful evaluation. Our process is designed to identify lien complications before we file, so you're never surprised by an unexpected result.
    `.trim(),
    author: "King's Equity Partners, LLC",
    date: "2026-04-29",
    readTime: "5 min",
    category: "Education",
    tags: ["junior lienholder", "surplus funds", "property taxes"],
  },
  {
    slug: "how-we-find-surplus-funds-others-miss",
    title: "How We Find Surplus Funds That Others Miss",
    excerpt:
      "Most surplus recovery firms rely on the same public databases. Here's the difference in our lead acquisition and qualification process — and why it matters for your case.",
    content: `
When a firm says it can help you recover surplus funds, the natural next question is: **how did you find me?**

The answer varies widely in the industry. Some firms buy lead lists from third-party data vendors. Others rely on word-of-mouth. Some do active outreach; others wait for clients to find them.

We do something more systematic.

## Our Lead Acquisition Process

Every day, our automated pipeline monitors Florida county Clerk of Court records for new tax deed auction results. When a property sells for more than the minimum bid — which is the amount needed to cover the outstanding taxes — we flag it as a potential surplus case.

We then cross-reference this against:

1. **Ownership records.** We identify who owned the property at the time of the sale.
2. **Skip tracing.** We verify current contact information for the former owner using federal do-not-call registry scrubbing and multiple data sources.
3. **Title qualification.** We review the county's posted title documents to evaluate junior liens, recorded encumbrances, and the likelihood of a recoverable surplus.

This process runs daily across our target Florida counties, generating a fresh pipeline of qualified leads.

## Why Automation Matters

The reason most surplus funds go unclaimed isn't a lack of money — it's a lack of outreach. The former owner doesn't know to come looking. The Clerk isn't in the business of finding them. Without a systematic outreach effort, the deadline passes and the funds escheat to the county.

Our automation allows us to reach claimants quickly, while the 120-day window is still open. Manual outreach at scale would be cost-prohibitive; automated qualification allows us to focus human effort only on leads that have passed our title screening.

## What Happens When We Contact You

When you receive a call or letter from us, it's because our records indicate you may be owed surplus funds from a specific property. We will identify the county, the approximate surplus amount, and the remaining deadline.

We will never pressure you. We will never charge you upfront. And we'll always tell you that you have the right to file directly with the Clerk at no cost.

Our goal is to make sure you at least know the money exists and understand your options before the deadline passes.
    `.trim(),
    author: "King's Equity Partners, LLC",
    date: "2026-05-06",
    readTime: "5 min",
    category: "How We Work",
    tags: ["lead acquisition", "surplus funds", "property taxes"],
  },
  {
    slug: "how-to-find-out-if-you-are-owed-surplus-funds",
    title: "How to Find Out If You're Owed Surplus Funds From a Property You Owned",
    excerpt:
      "You won't get a notice in the mail telling you that money is being held in your name. Here's how to find out on your own whether a former property in Florida is sitting on surplus funds you can claim.",
    content: `
The single biggest problem with unclaimed surplus funds is that there is no systematic notification system. The Clerk of Court sends a notice to the former owner, but if that notice is undeliverable, the money still sits there — and the 120-day clock still runs.

If you owned a property in Florida that went to tax deed sale, or if you are the heir of someone who did, you may be owed money and simply don't know it. Here's how to find out.

## Step 1: Identify the County Where the Property Was Sold

Tax deed sales are handled by the Clerk of Court in each county. The first thing you need is the county where the sale occurred. If you're not sure, you can find this by searching the property address through the county property appraiser's website — most Florida counties have this information publicly accessible.

Once you have the county, you can contact or visit that Clerk of Court's office.

## Step 2: Ask the Clerk for the Surplus Funds List

Florida Clerks maintain records of surplus funds being held. You can call the Clerk's office directly or, in most counties, find this information online through the Clerk's official website. Look for a section related to "Tax Deed" or "Surplus Funds."

You'll need to provide the property address or the case number from the tax deed sale. If you don't have the case number, the address is usually sufficient.

## Step 3: Look for Your Name or the Property Address

Once you have access to the surplus records, search for the property address or the former owner's name. If surplus funds are being held from a sale involving your property, you should see the address and the amount currently being held.

Keep in mind: the funds may be listed under the former owner's name at the time of the sale, which may differ from a name you've since changed.

## Step 4: Confirm the Deadline

If you find a match, ask the Clerk to confirm the date the Notice of Surplus was mailed. This is the starting point for the 120-day deadline under Florida Statute § 197.582. If that notice was mailed more than 120 days ago, your window to file may have closed — but it never hurts to ask.

## Step 5: Understand What Documentation You Will Need

If the deadline hasn't passed and you want to file a claim, the Clerk will typically require:

- A completed **Assignment of Beneficial Interest** form (available from the Clerk)
- Proof of identity as the former owner of record
- The property address and tax deed case number
- A notarized signature

If the former owner has passed away, heirs will need to provide death certificates, proof of heirship, and likely additional documentation. This is where the process can become complicated.

## Why Most People Never Find Out

The gap is almost always in Step 2. Most people don't know to ask the Clerk directly, and there is no state-level registry that proactively matches former owners to unclaimed surplus funds. The burden is entirely on the claimant.

This is the core problem our firm was built to solve. We systematically monitor tax deed sales across Florida's high-volume counties, cross-reference ownership records, and reach out to potential claimants before their deadline expires.

If you'd like a free, no-obligation review of whether you may be owed surplus funds from a Florida property, complete our contact form and we'll look into it for you.
    `.trim(),
    author: "Charles King III",
    date: "2026-05-15",
    readTime: "5 min",
    category: "Education",
    tags: ["surplus funds", "how to find", "property taxes"],
  },
  {
    slug: "signs-you-should-be-skeptical-of-surplus-recovery-company",
    title: "Red Flags to Watch For When Evaluating a Surplus Recovery Company",
    excerpt:
      "The surplus recovery industry attracts reputable firms and bad actors alike. Here are the warning signs that should make you pause before signing anything.",
    content: `
Not every company that contacts you about surplus funds has your best interests at heart. Like any industry where money is flowing and consumers aren't experts, surplus recovery attracts both legitimate firms and operators who are more interested in taking a fee than actually recovering funds for you.
Here are the specific warning signs we think you should watch for.
## They Guarantee a Recovery
No legitimate firm can guarantee they'll recover surplus funds for you. Florida law doesn't allow it, and any company that makes this promise is either lying or doesn't understand the process. Surplus claims can fail for many reasons — missed deadlines, competing lienholder claims, title complications — and a company that promises results before reviewing the specific facts of your case is selling you something, not earning their fee.
## They Demand Upfront Payment
Reputable surplus recovery firms work on a contingency basis. That means they only get paid if they succeed, and their fee comes out of the surplus funds when the Clerk disburses them. If a company asks you to write a check, pay a retainer, or cover "filing fees" upfront before they've done any work, that's a serious red flag.
## They Won't Explain Split Disbursement
Split disbursement — the process by which the Clerk of Court sends 75% of the surplus directly to you and 25% to the filer in two separate checks — is one of the most important consumer protections in Florida surplus recovery. A reputable firm will explain this process clearly and tell you that you have the right to request it. If a company avoids the topic, dismisses it, or tells you it's "not available," be skeptical.
## They Pressure You to Sign Quickly
The 120-day deadline is real and urgent, but a legitimate firm will give you time to read documents, ask questions, and make a considered decision. High-pressure tactics — "you have to sign today or you'll lose everything" — are a hallmark of companies more interested in locking you into a contract than in actually reviewing whether your case is strong.
## They Can't Explain the Title Search Process
Before filing a surplus claim, a title search is essential. It tells us who the actual former owner of record is, whether there are junior lienholders, and whether the surplus amount justifies the filing. If a company can't explain what a title search involves or why it matters, they may be filing claims without understanding the actual likelihood of recovery.
## They Don't Tell You You Can File Directly
Every legitimate firm should tell you that you have the right to file a claim directly with the Clerk of Court at no cost. We do this because it's the law, because informed clients make better decisions, and because transparency is the foundation of a relationship worth having. A company that implies you have no choice but to work with them is not being straight with you.
## What We Do Differently
At King's Equity Partners, we believe transparency is the cost of entry, not a competitive advantage. We explain the process, disclose the contingency fee in writing before you sign anything, and use split disbursement in every case where it's available. We tell you if we think your case is weak, and we don't pressure you into signing.
If you've been contacted by another surplus recovery company and something felt off, we encourage you to get a second opinion from us — at no cost, with no obligation.
    `.trim(),
    author: "Charles King III",
    date: "2026-05-15",
    readTime: "5 min",
    category: "Education",
    tags: ["surplus recovery", "red flags", "consumer protection"],
  },
  {
    slug: "what-is-an-assignment-of-beneficial-interest",
    title: "What Is an Assignment of Beneficial Interest in a Surplus Claim?",
    excerpt:
      "An Assignment of Beneficial Interest is the legal document that transfers your right to surplus funds from the Clerk of Court to a third party. Here's why it exists and what it means for you as a claimant.",
    content: `
If you've spoken with a surplus recovery firm about filing a claim on your behalf, you've almost certainly heard the phrase **Assignment of Beneficial Interest**, often abbreviated as an "ABI." It's the core legal document in any third-party surplus claim. Understanding what it is and what it does will help you make an informed decision about whether to work with a firm like ours.

## What the ABI Actually Does

In simple terms, an Assignment of Beneficial Interest transfers — or assigns — your legal right to claim surplus funds from the Clerk of Court to a third party. When you sign an ABI, you are telling the Clerk: *"I am authorizing [Firm Name] to file my surplus claim and receive my disbursement on my behalf."*

The Clerk will still send the surplus to the rightful owner (you). But under the ABI structure, the third party files the claim and the Clerk sends the funds in care of the assignee, who then remits your portion to you.

## Why Does This Arrangement Exist?

The short answer is that the Clerk of Court needs to know who is legally authorized to file the claim. The ABI is the document that establishes that authorization. Without it, a third party has no standing to file — the Clerk would reject any filing not made by the former owner or their legal representative.

The ABI also creates a clear paper trail that protects everyone involved: it confirms you knowingly transferred your rights, it specifies the terms of the arrangement, and it gives the Clerk a defensible basis for disbursing funds to the assignee.

## What Are You Actually Assigning?

You are assigning your **beneficial interest** — your right to receive the surplus funds — to the third party. You are not assigning the underlying property. The property has already been sold at the tax deed auction. You are assigning only the right to claim whatever surplus resulted from that sale.

This distinction matters. Signing an ABI does not affect your ownership of any other assets. It does not transfer any real property rights. It is a limited, specific authorization related solely to the surplus funds being held by the Clerk.

## The Split Disbursement Connection

As we explained in a previous post, Florida's split disbursement mechanism allows the Clerk to issue two separate checks: 75% to the former owner and 25% to the third-party filer. The ABI is the document that makes this possible. It instructs the Clerk on how to disburse the funds and confirms the assignee's right to receive their portion directly.

## What Does the Firm Receive?

When you sign an ABI with a contingency firm, you are agreeing to assign your right to the surplus in exchange for the firm pursuing the claim on your behalf. The firm's fee — typically 25% of the recovered surplus — is deducted from the funds the Clerk disburses. Under split disbursement, this 25% goes directly to the firm from the Clerk; your 75% comes to you separately.

## Can You Revoke an ABI?

In most cases, yes — but only before the Clerk processes the claim. Once the Clerk has disbursed the funds, the assignment is complete and cannot be undone. If you have second thoughts about working with a firm, contact them immediately and confirm the status of your claim before the Clerk takes action.

## What Should You Look For in the ABI?

A well-drafted ABI should include:

- The property address and the Clerk's case number for the surplus
- The name of the former owner (you) as the assignor
- The name of the firm as the assignee
- A clear statement of the contingency fee arrangement
- A split disbursement directive instructing the Clerk to send two checks
- Your signature, notarized

If an ABI document doesn't contain these elements, ask questions before you sign. A professional firm will walk you through every section and answer any concerns you have.

## You Always Have the Choice

You are never required to sign an ABI. You have the legal right to file a surplus claim directly with the Clerk of Court yourself, at no cost. A reputable firm will tell you this upfront, before ever asking for your signature.

If someone is pressuring you to sign an ABI without explaining what it does, without giving you time to review it, or without clearly disclosing the fee arrangement — that is a reason to pause and get a second opinion.

At King's Equity Partners, we provide every client with a clear explanation of the ABI before asking for a signature. We believe informed consent is not optional — it is the minimum standard for any professional relationship.
    `.trim(),
    author: "Charles King III",
    date: "2026-05-22",
    readTime: "5 min",
    category: "Education",
    tags: ["assignment of beneficial interest", "surplus funds", "legal documents"],
  },
  {
    slug: "what-happens-when-there-are-competing-claims",
    title: "What Happens When Multiple Parties Claim the Same Surplus Funds",
    excerpt:
      "When a junior lienholder, a former owner, and an heir all file claims on the same surplus, the Clerk of Court has to sort it out. Here's how that process works and what it means for your claim.",
    content: `
When more than one party files a claim for the same surplus funds, Florida law requires the Clerk of Court to pause disbursement until the competing claims are resolved. This situation arises more often than most people realize, and it can significantly delay — or in some cases reduce — what you ultimately receive.

## Why Competing Claims Happen

A tax deed surplus becomes contested when two or more parties each believe they have a legal right to the funds. The most common scenarios include:

**The former owner and a junior lienholder both file.** This is the most frequent situation. The former owner claims the surplus as the property's former titleholder. Meanwhile, a junior lienholder — such as a second mortgage holder or a judgment creditor — argues that the surplus should be applied against the debt they hold, even though the senior lien was already satisfied at the sale.

**An heir and an Assignee both file.** If the former owner has passed away, heirs may file a claim. But if the former owner had previously signed an Assignment of Beneficial Interest to a third-party recovery firm, that assignee may also file. The Clerk must determine which claim has priority.

**Multiple heirs file separately.** When a property is held by multiple heirs, each may file independently, creating competing claims among family members over the same pool of funds.

## What the Clerk Does When Claims Compete

When the Clerk receives multiple claims for the same surplus, they do not adjudicate the dispute themselves. Under Florida Statute § 197.582, the Clerk is required to hold the funds — they cannot disburse to any party until the competing claims are resolved or until a court order determines the rightful recipient.

This means the money sits in the Clerk's account while the parties sort it out. In our experience, this can add weeks to months to the recovery timeline.

## How Competing Claims Get Resolved

The most common resolution paths are:

**Negotiated settlement.** The parties agree among themselves on how to split the funds. This is the fastest path and avoids litigation. We frequently negotiate with junior lienholders to reach a fair split that acknowledges both parties' legal interests.

**Court determination.** If the parties cannot agree, any party can file an interpleader action in circuit court, asking a judge to determine who is legally entitled to the funds. This is slower and more expensive, but produces a final, enforceable judgment.

**Senior lienholder priority.** In general, the former owner's claim is primary. Junior lienholders can file, but their claim is subordinate to the former owner's right to the surplus — provided the former owner's claim was filed timely and properly. If a junior lienholder fails to file within the statutory window, their claim may be barred entirely.

## What This Means for Your Claim

If you are a former owner and a junior lienholder has filed a competing claim, your position is legally strong — but the delay is real. The Clerk will not release funds to you until the junior lienholder's claim is either withdrawn or resolved.

If you are a junior lienholder, the window to file is the same 120 days from the Clerk's notice. Filing late may result in your claim being barred, even if you have a legitimate debt underlying it.

## How We Handle Competing Claims

Our team has experience navigating contested surplus disbursements. When we take a case with competing claims, we:

1. **Evaluate the strength of each party's legal position** before filing
2. **Communicate directly with the Clerk** to confirm the status of competing filings
3. **Contact competing filers** to explore negotiated settlements where possible
4. **Advise our client** on whether litigation risk is present and what it would cost to resolve

Our goal is always to get your funds released as quickly as possible — and that sometimes means working out a fair split rather than fighting over the full amount.

If you have received notice that your surplus claim is being held due to a competing filing, contact us immediately. Time is still a factor, and we can advise you on your options.
    `.trim(),
    author: "Charles King III",
    date: "2026-05-29",
    readTime: "5 min",
    category: "Education",
    tags: ["competing claims", "surplus funds", "disbursement"],
  },
  {
    slug: "surplus-funds-nationwide",
    title: "Surplus Funds Beyond Florida: A National Overview",
    excerpt:
      "Tax deed and foreclosure surplus exist in nearly every state. If you owned property that sold for more than you owed, you may be entitled to the excess — regardless of where you lived.",
    content: `
While Florida's surplus recovery framework is the most well-known — thanks to Florida Statute § 197.582 — surplus funds are not exclusive to Florida. Nearly every state has some form of surplus or excess proceeds statute. If your property sold at a tax sale or foreclosure auction for more than was owed, the excess belongs to you by law.

## How Surplus Works Nationwide

The mechanics are similar across states:

1. **A property is sold** at auction — either a tax deed sale or a mortgage foreclosure
2. **The sale price exceeds the debt** — the winning bid is more than the taxes owed (tax sale) or the mortgage balance (foreclosure)
3. **The surplus is held** — typically by the county clerk, sheriff, or trustee
4. **The former owner must claim it** — within a statutory deadline that varies by state

## Surplus Sources by Type

**Tax Deed / Tax Sale Surplus (most common)**

When a property sells at a tax auction for more than the outstanding tax debt, the county holds the overage. States that allow third-party claims include Florida, Texas, Georgia, Illinois, Indiana, Ohio, and many others. Deadlines range from 90 days to 3 years depending on the state.

**Foreclosure Surplus (growing opportunity)**

When a lender forecloses and the property sells at auction for more than the mortgage balance, the former owner is entitled to the surplus. This happens frequently in appreciating markets where equity has built up before the foreclosure. Most former owners never claim these funds because they assume losing the house means losing everything.

**Mortgage Overages (lesser known)**

When a mortgage is paid off — whether through refinance, sale, or foreclosure — and the escrow or payoff exceeds the balance, an overage is created. These funds may be held by the lender, servicer, or county records office and are subject to state unclaimed property laws.

## The National Opportunity

The surplus recovery industry began in Florida because of its well-developed statutory framework. But the same opportunity exists across the country. At King's Equity Partners, we are expanding our operations to identify and recover surplus funds nationwide — wherever they are held.

If you owned property anywhere in the United States that was sold at auction, contact us for a free assessment. The money is yours by law. Let us help you claim it.
    `.trim(),
    author: "Charles King III",
    date: "2026-06-01",
    readTime: "5 min",
    category: "National",
    tags: ["surplus funds", "national", "tax deed", "foreclosure"],
  },
  {
    slug: "foreclosure-surplus-explained",
    title: "Foreclosure Surplus: What Happens When Your Lender Sells for More Than You Owe",
    excerpt:
      "If your home was foreclosed and sold for more than the mortgage balance, you may be entitled to tens of thousands of dollars — and most people never claim it.",
    content: `
When people hear "foreclosure," they think it means losing everything. That is not always true. If the lender sells your property at auction for more than what you owed, the excess — the surplus — is legally yours.

## The Foreclosure Surplus Misonception

The most common belief is: "The bank took my house, so they took everything." In reality, the bank is only entitled to recover the amount you owe plus allowable fees and costs. If the auction price exceeds that total, the law says the surplus belongs to the former homeowner — not the bank, not the buyer, and not the county.

## How It Works

Let's say you owed $150,000 on a mortgage. The property is foreclosed and sold at auction for $220,000. After the bank takes their $150,000 (plus fees), approximately $65,000 remains. That $65,000 is your surplus.

The trustee or sheriff handling the sale is required to deposit the surplus with the court or county. The former owner — you — has a legal right to claim it.

## Why Most People Never Claim It

The problem is notification. After foreclosure, the former owner has often moved. The notice of surplus is mailed to the last known address — which may be the foreclosed property or an address the lender has on file. If you didn't update your mailing address after leaving, you likely never received notice.

Meanwhile, the clock is ticking. Deadlines vary by state — typically 6 months to 3 years — and once the deadline passes, the funds may escheat to the state or county permanently.

## Who Else May Have a Claim

The situation becomes more complex when there are junior lienholders — a second mortgage, a home equity line, a judgment lien, or unpaid property taxes. These parties may also have claims against the surplus. In most jurisdictions, the former owner's claim has priority, but lienholders who file timely may be entitled to a portion.

## How We Help

Our firm identifies foreclosure surplus cases across multiple states and helps former owners navigate the claims process. We handle the title review, lien assessment, documentation, and filing. If multiple claimants are involved, we negotiate on your behalf.

The process is contingency-based. If we don't recover your funds, you owe nothing.

If you lost a home to foreclosure in the last 3 years — anywhere in the United States — contact us. You may be owed money you don't even know about.
    `.trim(),
    author: "Charles King III",
    date: "2026-06-02",
    readTime: "6 min",
    category: "National",
    tags: ["foreclosure", "surplus funds", "national", "mortgage overage"],
  },
  {
    slug: "how-surplus-funds-become-unclaimed-property",
    title: "How Surplus Funds Become Unclaimed Property and How to Track Them Down",
    excerpt:
      "Every year, millions of dollars in unclaimed surplus funds escheat to state treasuries. Here's how the escheatment process works and what it means for former property owners.",
    content: `
When surplus funds from a tax sale or foreclosure go unclaimed past the statutory deadline, they do not simply disappear. Instead, they escheat — a legal term meaning they are transferred to the state government for safekeeping. But "safekeeping" often means that getting the money back becomes significantly harder.

## The Escheatment Pipeline

The typical timeline looks like this:

1. **Property is sold at auction** — generating surplus funds
2. **Clerk or trustee holds the funds** — typically for 90 days to 3 years, depending on state law
3. **Notice is sent** — to the former owner's last known address
4. **Deadline passes** — if no claim is filed within the statutory window
5. **Funds escheat to the state** — transferred to the state's unclaimed property division
6. **Former owner must file a claim with the state** — typically a more involved process than filing with the county

## State-by-State Differences

Every state handles escheatment differently. Some states have robust online databases where you can search for unclaimed funds by name. Others require written requests with notarized documentation. Processing times range from weeks to over a year.

The key variables by state:
- **Holding period** before escheatment
- **Required documentation** to reclaim (proof of identity, proof of ownership, death certificates for heirs)
- **Processing timeline** for state-level claims
- **Whether third-party assignees** can file on behalf of the former owner

## Why Escheated Funds Are Harder to Recover

When funds are held at the county level, the process is relatively straightforward — the Clerk's office knows the property, the case number, and the circumstances of the sale. Once funds escheat to the state, the trail goes cold. The state's unclaimed property division treats the funds generically — as a dollar amount attached to a name — without the rich context of property records, auction results, and title history that exists at the county level.

This makes it essential to file your claim **before** the escheatment deadline. At King's Equity Partners, our monitoring systems track deadlines across multiple states and prioritize cases approaching escheatment.

## How to Search for Unclaimed Funds

If you suspect you may have unclaimed surplus from a former property, start with:

1. **Your state's unclaimed property website** — search by name and former addresses
2. **MissingMoney.com** — a multi-state database endorsed by NAUPA
3. **County Clerk or Sheriff's office** — for funds still held at the county level
4. **Court records** — surplus from judicial foreclosures may be held by the court

## We Can Help

Our firm tracks unclaimed surplus funds across the country. Contact us for a free assessment. If you are owed money, we will find it — and we only get paid if you do.

    `.trim(),
    author: "Charles King III",
    date: "2026-06-03",
    readTime: "6 min",
    category: "National",
    tags: ["escheatment", "unclaimed property", "state treasury", "surplus funds"],
  },
  {
    slug: "king-equity-partners-goes-national",
    title: "King's Equity Partners Goes National: What This Means for Surplus Recovery",
    excerpt:
      "We are expanding our surplus recovery operations beyond Florida to help former property owners across the country claim the funds they are owed.",
    content: `
After establishing a strong track record in Florida surplus recovery, King's Equity Partners is proud to announce our expansion to additional states. We now identify and recover surplus funds from tax deed sales, foreclosure auctions, and mortgage overages nationwide.

## Why We're Expanding

The surplus recovery problem is not unique to Florida. Across the country:

- **Over $5 billion** in unclaimed surplus funds sit in county and state accounts
- **Fewer than 5%** of eligible former owners ever file claims
- **Most statutory deadlines are missed** due to lack of notification
- **State escheatment laws** vary widely, creating confusion for claimants

Florida gave us the legal framework and operational experience to build an efficient recovery process. Now we are bringing that same approach to other states.

## What Changes and What Stays the Same

**What is new:**
- We now monitor surplus records in multiple states, not just Florida
- Our network includes local counsel and title partners across new jurisdictions
- Our assessment process accounts for each state's specific statutory requirements

**What has not changed:**
- No upfront fees. We are paid only when we recover funds for you.
- 25% contingency fee with split disbursement where available
- You always have the right to file directly at no cost
- Professional title review before any claim is filed
- Transparent process with clear communication at every step

## States We Are Actively Operating In

Our current operational footprint includes Florida, Georgia, Texas, Illinois, Ohio, Indiana, and Maryland, with additional states being added each quarter.

If your property was in a state not listed above, contact us anyway — we may already be evaluating that jurisdiction or can advise you on the best path forward.

## What This Means for Former Property Owners

If you owned property anywhere in the United States that was sold at auction — whether tax deed or foreclosure — and you suspect surplus funds may exist:

1. **Contact us for a free assessment** — we will research whether funds are being held
2. **No obligation** — the assessment is free and you decide whether to proceed
3. **Fast response** — we review public records and respond within one business day

The money is yours by law. We exist to make sure you receive it.

    `.trim(),
    author: "Charles King III",
    date: "2026-06-04",
    readTime: "4 min",
    category: "Company News",
    tags: ["national", "expansion", "surplus funds", "company news"],
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
