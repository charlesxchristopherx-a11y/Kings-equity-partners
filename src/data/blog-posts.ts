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
    slug: "role-of-the-clerk-of-court-in-surplus-disbursement",
    title: "The Role of the Clerk of Court in Florida Surplus Disbursement",
    excerpt:
      "The Clerk of Court is the neutral gatekeeper of surplus funds in Florida. Here's exactly what the Clerk does — and does not do — once a property sells at a tax deed auction for more than the taxes owed.",
    content: `
In Florida's tax deed surplus process, no party plays a more important — or more misunderstood — role than the Clerk of Court. The Clerk is the neutral gatekeeper of the funds, and the law gives them specific, limited responsibilities. Understanding what the Clerk actually does will help you know what to expect when you file a claim, and where their role ends.

## Holding the Funds After the Sale

When a property sells at a tax deed auction for more than the taxes owed, the surplus is deposited with the Clerk of Court in the county where the property is located. The Clerk does not initiate this process — they receive the funds as part of the auction settlement — but from that point forward, the funds are under their control.

The Clerk's job at this stage is custodial: hold the money, track it, and disburse it to the rightful claimant under the terms of Florida law.

## Sending the Notice of Surplus

Within a defined window after the sale, the Clerk is required to mail a **Notice of Surplus Funds** to the former property owner of record. The notice includes the property address, the case number, the amount being held, and the deadline for filing a claim.

This is a critical step because the 120-day clock under Florida Statute § 197.582 begins running on the date the Clerk mails the notice. If the notice is never received, the clock still runs.

## Verifying the Claimant

When a claim is filed, the Clerk must verify that the person filing is in fact the rightful owner of record at the time of the sale. The Clerk will review the public records, confirm identity, and check whether the claim form is complete and properly executed.

The Clerk's role here is administrative verification, not investigation. They do not perform independent title searches, contact heirs, or evaluate competing claims beyond what is filed with their office.

## Managing Competing Claims

If more than one party files a claim — for example, a junior lienholder and the former owner — the Clerk is required to pause disbursement until the competing claims are resolved. The Clerk does not adjudicate disputes between claimants. Their job is to hold the funds safely while the parties work out who is entitled, or until a court issues an order directing disbursement.

## Disbursing the Funds

Once the Clerk has verified a valid claim and there are no competing filings, the funds are disbursed. The Clerk is responsible for issuing payment according to the split disbursement rules, sending 75% to the former owner and 25% to the third-party filer in cases where an Assignment of Beneficial Interest has been executed.

## What the Clerk Does Not Do

It is just as important to understand what the Clerk does not do:

- **The Clerk does not find claimants.** If the Notice of Surplus is undeliverable, the funds stay in the Clerk's account until the deadline passes. The Clerk is not in the business of tracking down former owners.
- **The Clerk does not provide legal advice.** They can explain forms and procedures, but they cannot tell you whether your claim is strong, whether a junior lienholder will file, or whether you should hire a firm.
- **The Clerk does not negotiate settlements.** When competing claims exist, the Clerk holds the funds — they do not mediate the dispute.

## Why This Matters for You

The Clerk is a neutral administrator, not an advocate. If the former owner is unaware that funds are being held — which is true in the vast majority of cases — the funds will simply sit until the deadline passes and escheat to the county.

This is why an active, informed claimant — or a third-party firm working on your behalf — is so important. The Clerk is there to do their part. Someone has to do yours.

If you believe you may be owed surplus funds from a Florida tax deed sale, we can help you find out. Our contact form is the fastest way to start a free, no-obligation review of the public records.

    `.trim(),
    author: "Charles King III",
    date: "2026-06-05",
    readTime: "5 min",
    category: "Education",
    tags: ["clerk of court", "surplus funds", "florida", "disbursement"],
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
  {
    slug: "can-heirs-file-a-surplus-claim-for-deceased-owner",
    title: "Can Heirs File a Surplus Claim on Behalf of a Deceased Owner?",
    excerpt:
      "If a property owner passes away after a tax deed sale but before surplus funds are claimed, the money does not disappear. Here's how Florida law treats heirs and personal representatives in the surplus claim process.",
    content: `
When a property sells at a tax deed auction in Florida, the surplus funds are held by the Clerk of Court and the former owner of record is notified. In many cases, the former owner has passed away by the time the notice is mailed. This raises an important question: can the heirs step in and claim the funds?

The short answer is yes — but the process depends on the circumstances.

## Who Has the Legal Right to Claim?

Under Florida law, the right to claim surplus funds is treated like any other asset of the deceased. The funds pass through the estate, which means the person with legal authority to act for the estate can file the claim on behalf of the heirs.

That authority is generally held by one of the following:

- A **personal representative** named in a will that has been admitted to probate
- An **administrator** appointed by a probate court when there is no will
- A **trustee** of a trust that held the property at the time of the sale
- The **surviving co-owner**, if the property was held in a form that passes automatically to the survivor (such as joint tenancy with right of survivorship)

If you are an heir but none of these roles has been established, you may need to open a probate proceeding before you can file the claim. Many families delay probate for years, which can be a problem when a 120-day surplus deadline is already running.

## What Documents Are Required?

The Clerk of Court will not disburse surplus funds to a claimant who is not the owner of record. When the owner of record has passed away, the Clerk requires documentation that establishes the claimant's legal authority. Typical documents include:

- A **certified copy of the death certificate**
- **Letters of administration** or **letters testamentary** issued by a probate court
- A **court order** that specifically authorizes the heir or personal representative to claim the funds
- An **affidavit of heirship** in some smaller estates, depending on county procedure
- The **surplus claim form** completed and notarized by the legally authorized party

The exact documentation required varies by county, which is why a title review by someone familiar with the local Clerk's office is so important.

## What If There Was No Probate?

This is one of the most common situations we see. The owner passed away years ago, the property has long since been sold at tax deed, and the family never opened a formal probate estate. The heirs may not even know surplus funds exist.

In these cases, the family generally has two options:

1. **Open a summary administration** if the estate qualifies under Florida's simplified probate rules for smaller estates
2. **File a petition for determination of heirs** in the circuit court to establish who is legally entitled to the surplus

Both options are real legal processes, and both take time. The 120-day surplus deadline does not pause because the heirs were unaware of it. This is one of the most time-sensitive scenarios in surplus recovery.

## Competing Claims From Multiple Heirs

When there are several heirs, the Clerk will not disburse funds to one heir without documentation that the others have been satisfied. A **family settlement agreement** signed by all heirs, or a court order directing distribution, may be required.

We have seen cases where a single heir files a claim and the others are not aware, only for the claim to be challenged weeks later. This is why we always recommend a clear, written agreement among heirs before any filing.

## How a Third-Party Firm Can Help

Heir cases are more complex than a simple self-filing, but they are absolutely recoverable. A firm like ours can:

- Pull the death certificate and any prior probate filings
- Coordinate with a probate attorney to open a summary administration if needed
- Prepare and file the surplus claim with the correct supporting documents
- Track the disbursement and ensure all heirs receive their share

The contingency fee structure is the same. The estate pays nothing up front, and we only get paid when funds are recovered. If you believe a deceased family member may have been owed surplus funds from a Florida property, contact us for a free assessment.

    `.trim(),
    author: "Charles King III",
    date: "2026-06-12",
    readTime: "5 min",
    category: "Education",
    tags: ["heirs", "probate", "deceased owner", "surplus funds"],
  },
  {
    slug: "how-long-does-the-clerk-take-to-process-a-surplus-claim",
    title: "How Long Does the Clerk Take to Process a Surplus Claim?",
    excerpt:
      "Filing a surplus claim is only the first step. The Clerk of Court must verify ownership, publish notice, wait out the objection window, and then disburse the funds. Here is a realistic timeline from claim to check.",
    content: `
After a Florida tax deed sale, the surplus funds are held by the Clerk of Court until the proper claimant comes forward. Once a claim is filed, most people expect their money within a few weeks. In reality, the process almost always takes longer, and the timing depends on a handful of predictable steps.

## The 120-Day Owner Deadline Comes First

Before the Clerk can disburse surplus funds to anyone, the original owner of record must be given the chance to claim them. Under Florida law, the Clerk publishes notice of the surplus and the former owner has 120 days from the date of the sale to file a claim.

During this period, the Clerk cannot release the funds, even if a creditor or junior lienholder has already submitted a complete claim. The 120-day window is a hard statutory hold. Most claims that are ready at the end of the sale simply have to wait it out.

## After the 120 Days, the Clock Starts Again

Once the 120-day period has passed without a claim from the owner of record, the Clerk begins reviewing claims from other parties. This is where the real processing time begins. The typical stages are:

- **Initial review of the claim packet** — usually 2 to 6 weeks depending on the county's workload
- **Verification of the claimant's identity and ownership interest** — additional 2 to 4 weeks
- **Confirmation that no owner claim was filed** — sometimes a separate step that takes another 1 to 3 weeks
- **Approval and check cutting** — typically 1 to 4 weeks once everything is verified

Adding those stages together, a clean and complete claim filed just after the 120-day period often takes another 8 to 16 weeks to be paid. Larger counties with more auctions tend to be slower, while smaller counties can move noticeably faster.

## Factors That Slow Things Down

A few common issues regularly extend the timeline:

- **Missing or unsigned documents** — the Clerk will return incomplete packets rather than asking for clarification
- **Heir claims without probate documents** — additional documentation has to be filed before the claim can be approved
- **Junior lienholders or competing claims** — the Clerk must resolve who is entitled to what before any disbursement
- **County backlog** — some Florida counties process surplus claims only once a month, which can add weeks on its own

## Factors That Can Speed Things Up

In our experience, the fastest claims share a few traits. The claim packet is complete and notarized on the first submission, the claimant is the owner of record with no probate issues, and the county's surplus clerk has a light queue at the time of filing. Working with a firm that knows each county's quirks and document requirements tends to eliminate most of the avoidable delays.

## A Realistic Expectation

From the date of the tax deed sale to the date the check is mailed, most successful surplus claims take somewhere between 6 and 9 months. Claims involving heirs, multiple parties, or junior lienholders regularly take longer. Anyone who promises you a specific disbursement date before the claim has been reviewed is guessing.

The good news is that once the Clerk issues the check, the money is in your account or in the mail, and the process is finished. Patience and a complete filing are the two things that matter most.

If you have surplus funds coming and want a realistic estimate for your specific county, we are happy to walk you through the timeline on a free consultation.

    `.trim(),
    author: "Charles King III",
    date: "2026-06-26",
    readTime: "5 min",
    category: "Education",
    tags: ["clerk of court", "processing time", "timeline", "surplus funds"],
  },
  {
    slug: "florida-counties-highest-surplus-volumes",
    title: "Which Florida Counties Generate the Most Tax Deed Surplus?",
    excerpt:
      "Surplus funds are not distributed evenly across Florida. A handful of large, high-volume counties account for the majority of the money the Clerk holds, and understanding this concentration helps explain why outreach efforts focus where they do.",
    content: `
Not every Florida county produces the same amount of tax deed surplus. The total dollars held after tax deed sales vary dramatically from one county to the next, and a relatively small number of large counties account for the bulk of the funds that pass through the Clerk of Court each year.

## Why Volume Varies by County

Three main factors drive how much surplus a county generates:

- **Tax deed sale volume** — counties that hold more auctions each year create more opportunities for surplus
- **Property values in the tax sale pool** — higher-value properties that go to auction produce larger overages
- **Rate of delinquency** — counties with more delinquent property taxes see more foreclosures, which in turn produce more surplus

A small county with a handful of auctions a year might generate only a few thousand dollars in surplus. A large urban county with weekly auctions can produce millions.

## The Counties That Lead the State

Based on auction activity and reported surplus figures, the counties that consistently produce the highest tax deed surplus volumes include:

- **Miami-Dade County** — the largest tax deed auction in the state by case count, driven by a high volume of delinquent condominium and single-family properties
- **Broward County** — second in volume, with steady auctions and significant residential and commercial property values
- **Palm Beach County** — high-value coastal properties produce large surpluses on a smaller number of auctions
- **Hillsborough County** — Tampa Bay area, with strong auction volume and a mix of residential and commercial parcels
- **Orange County** — Orlando area, where rapid development has increased tax assessments and the size of surpluses
- **Duval County** — Jacksonville is one of the largest single-clerk jurisdictions in the state by land area
- **Lee County** — Fort Myers area, with steady growth in property values pushing surplus amounts higher
- **Polk County** — central Florida, with a large number of tax deed cases filed each year

These eight counties alone are typically responsible for the majority of surplus dollars held by Florida Clerks at any given time.

## What This Means for Former Owners

For a former property owner, the practical takeaway is simple. If you once owned property in one of these high-volume counties and that property went through a tax deed sale, there is a meaningful chance that surplus funds were held after the auction. The larger the county, the higher the volume of cases reviewed, and the more likely it is that a notice was mailed and a deadline started running.

Many former owners in these counties are owed surplus funds and never know it. Notices are sent by mail to the last address on file, and if that address is outdated, the owner may never see the letter. The funds are real, but reaching the rightful claimant is the hard part.

## Why This Matters for Outreach

From a recovery standpoint, this concentration shapes how the work is done. Firms that focus on these high-volume counties can build relationships with the Clerks, learn each office's process, and develop a system for tracking new filings. Smaller, lower-volume counties are not ignored, but they rarely produce the same scale of recoverable dollars.

If you believe you may be owed surplus funds from a property in one of these counties, or anywhere in Florida, the earlier you check the records, the better your position. The 120-day deadline from the Clerk's notice starts running whether the notice reaches you or not.

    `.trim(),
    author: "Charles King III",
    date: "2026-07-03",
    readTime: "5 min",
    category: "Education",
    tags: ["florida counties", "tax deed surplus", "high volume", "surplus funds"],
  },
  {
    slug: "missed-the-120-day-deadline-what-to-do-next",
    title: "What to Do If You Received a Surplus Notice but Missed the 120-Day Deadline",
    excerpt:
      "Missing the 120-day deadline under Florida Statute § 197.582 usually means the funds are gone — but in a narrow set of circumstances, options may still exist. Here is a realistic look at what is and is not possible after the window closes.",
    content: `
The 120-day deadline in Florida is firm, and most former owners who miss it lose their right to surplus funds permanently. That is the difficult truth at the center of every surplus recovery case. But "the deadline has passed" is not always the end of the story, and understanding the difference between a hard bar and a narrow exception can save a claim that looks lost.

## What the Statute Actually Says

Florida Statute § 197.582 gives the former owner of record 120 days from the date of the Clerk's Notice of Surplus to file a claim. After that window closes, the Clerk is required to turn the funds over to the county's general fund or, in some counties, to a dedicated unclaimed property account. The owner's legal interest in the money is extinguished.

This is not a deadline a court will routinely extend. The statute does not allow for late filings based on hardship, lack of notice, or simple mistake. The Clerk's office has no discretion to accept a claim filed after day 120.

## Why Missing the Deadline Is Common

In our experience, the deadline is missed for the same handful of reasons over and over:

- The notice was sent to an outdated mailing address and never arrived
- The notice arrived but was set aside as junk mail or overlooked in a stack of tax sale correspondence
- The owner was in the middle of a move, a divorce, a probate matter, or a health crisis and could not respond in time
- The owner passed away and heirs did not learn of the surplus until months after the deadline had run

None of these reasons, standing alone, are grounds to reopen a closed claim. The statute is clear, and the Clerk has no authority to forgive them.

## Options That May Still Exist

Even after the 120-day window has closed, there are a few narrow paths that can sometimes be pursued. They are not guarantees, and they require a specific factual situation.

**Equitable relief in circuit court.** In limited cases, a claimant can file a petition in circuit court asking a judge to allow a late claim. Courts have granted this relief where there is clear and convincing evidence that the Clerk's notice was never actually mailed or was mailed to the wrong address due to a county error. This is rare, expensive, and outcome-dependent.

**Claim against the county after escheat.** Once surplus funds escheat to the county, they may sit in an unclaimed property account for an additional period. The exact rules depend on the county, and in some cases the former owner can still file a claim directly with the county's unclaimed property division even after the Clerk's 120-day window has closed. This is not universally available, but it is worth checking.

**Probate-side recovery for heirs.** If the former owner has passed away and the estate was never formally probated, the heirs may be able to open a probate proceeding and pursue a claim through the personal representative. The outcome depends on the county and the specific facts.

**Settlement with a competing claimant.** If a junior lienholder or third party filed a timely claim and received the surplus, the former owner may be able to negotiate a private recovery from that party. This is not a legal right, but it is sometimes a practical option.

## What Does Not Work

A few common approaches that do not work after the deadline:

- Calling the Clerk and asking for an exception — they do not have the authority to grant one
- Filing a new claim "to be safe" — the Clerk will reject it as untimely
- Sending a demand letter to the county — once funds have escheated, the county's position is statutory
- Waiting for a refund or automatic disbursement — there is no such mechanism

## The Best Step Is the First One

The most important takeaway is that the 120-day deadline is real, and the best chance of recovery always comes from acting within the window. If you believe you have missed a deadline, the most productive next step is to confirm the exact facts: when the Clerk mailed the notice, when the 120 days actually ran, and whether the funds have already escheated. From there, an experienced recovery firm can tell you whether any of the narrow post-deadline options apply to your situation.

If you have questions about a surplus claim where the deadline has already passed, we are happy to review the public records at no cost and tell you honestly whether any path forward remains.

    `.trim(),
    author: "Charles King III",
    date: "2026-07-10",
    readTime: "5 min",
    category: "Education",
    tags: ["120 day deadline", "missed deadline", "surplus funds", "escheat"],
  },

  {
    slug: "what-to-do-after-a-national-tax-sale-or-foreclosure",
    title: "What to Do After a Tax Sale or Foreclosure in Another State",
    excerpt:
      "Surplus recovery rules vary by state. These practical steps can help former property owners preserve records, identify the office holding excess proceeds, and avoid relying on Florida deadlines elsewhere.",
    content: `
Losing property through a tax sale or foreclosure can leave former owners with unanswered questions. One of the most important is whether the sale produced more money than the taxes, mortgage, or other approved charges. If it did, the excess may be called surplus funds, excess proceeds, or an overage.

The process is different in every state. A Florida tax deed rule should not be assumed to apply to a property sale in another jurisdiction. Start by identifying the sale, the office holding the money, and the deadline that controls the claim.

## Confirm what kind of sale occurred

A tax sale usually follows unpaid property taxes or related public charges. A foreclosure sale usually follows a mortgage or other secured debt. The same property may appear in records for both a tax matter and a foreclosure, but the responsible office and claim procedure may be different.

Gather the property address, county, state, former owner's name, approximate sale date, and any case number. Keep the sale notice, deed, court papers, mortgage records, and letters from government offices together. These details make it easier to distinguish the correct proceeding from similarly named records.

## Find the office holding the funds

Search the official website for the county treasurer, tax collector, clerk of court, sheriff, trustee, or court that handled the sale. Try terms such as "tax sale surplus," "excess proceeds," "foreclosure surplus," and "unclaimed funds." Some offices publish lists of sales and balances. Others require a written request or a search using a case number.

Ask the responsible office whether the sale generated excess proceeds, whether funds are still being held, and which form or court procedure is required. Also ask whether the money has been transferred to a state or county unclaimed-property program.

## Verify the deadline before filing

Deadlines can be measured from the sale date, a court order, a mailed notice, or a later transfer of the funds. They can also differ depending on whether the claimant is the former owner, an heir, a lienholder, or an assignee. Write down the date of every notice and response, but do not assume that the date you received a letter controls unless the applicable rule says so.

Florida's 120-day period for certain surplus claims is not a nationwide deadline. Before sending documents, obtain the current instructions from the office holding the money or review the applicable state law. Filing with the wrong office or using a form from another state can cause delay.

## Prepare proof of ownership or succession

A claim may require identification, prior ownership records, a notarized form, tax information, or proof that an heir or personal representative may act for a deceased owner. Requirements vary widely. If a lien, estate, bankruptcy, or competing claimant is involved, additional review may be necessary.

A careful records search is the best starting point. King's Equity Partners reviews tax-sale and foreclosure surplus opportunities nationwide and checks the state-specific process before discussing a possible claim. This article is general educational information, not legal advice, and does not guarantee that funds exist or that a claim will succeed.
    `.trim(),
    author: "Charles King III",
    date: "2026-08-07",
    readTime: "5 min",
    category: "National",
    tags: ["surplus funds", "tax sale", "foreclosure", "national", "public records"],
  },
  {
    slug: "how-surplus-fund-deadlines-vary-by-state",
    title: "How Surplus-Fund Deadlines Vary by State",
    excerpt:
      "A surplus deadline that applies in Florida may not apply to a property sale in another state. Learn what to check before filing a tax-sale or foreclosure surplus claim nationwide.",
    content: `
If a tax sale or foreclosure creates excess proceeds, the former owner may have a path to claim them. The deadline, however, depends on the state and the type of sale. Florida's 120-day period after a Notice of Surplus is important for Florida tax deed claims, but it is not a national rule.

## Why the deadline depends on the state

Each state sets its own process for handling excess proceeds. A tax sale may be administered by a county tax collector, treasurer, sheriff, or clerk. A foreclosure surplus may remain in a court case, be held by a sheriff or trustee, or later move to an unclaimed-property office.

Those differences affect both the filing deadline and the paperwork. One jurisdiction may require a claim within a fixed number of days after notice. Another may give the former owner a longer period measured from the sale, a court order, or a separate notice. Some claims require a court filing rather than an administrative form.

## What to find before relying on a deadline

Before deciding that a claim is timely, confirm these facts:

- **What kind of sale occurred?** Tax-sale and foreclosure procedures are often separate.
- **Where are the funds held?** The responsible office may be different from the office that conducted the sale.
- **When did the clock start?** The trigger may be the sale date, a mailed notice, a court order, or a later transfer to unclaimed property.
- **Which rule applies to the claimant?** Former owners, heirs, lienholders, and assignees may have different documentation requirements.
- **Has the money moved?** Funds not claimed at the county or court level may later be reported to a state unclaimed-property program.

Keep the sale notice, case number, correspondence, and proof of ownership together. Write down the date each notice was mailed or received, but do not assume that the date you received it controls unless the applicable rule says so.

## How to verify the process

Start with the official website for the county court, treasurer, tax collector, sheriff, or trustee. Search for the property's county, the sale type, and terms such as "excess proceeds," "surplus funds," or "unclaimed funds." If the instructions are unclear, contact the office holding the money and ask for the current claim procedure and deadline in writing.

A national search requires separate checks for each property and jurisdiction. A form or deadline from one state should not be reused in another without confirmation. If an estate, lien, or competing claimant is involved, the required documents and procedure may be more involved.

King's Equity Partners reviews tax-sale and foreclosure surplus opportunities nationwide. We identify the sale type, locate the responsible office, and review the applicable process before discussing a possible claim. This article is general educational information, not legal advice, and does not guarantee that funds exist or that a claim will succeed.
    `.trim(),
    author: "Charles King III",
    date: "2026-07-31",
    readTime: "5 min",
    category: "National",
    tags: ["surplus funds", "deadlines", "tax sale", "foreclosure", "national"],
  },

  {
    slug: "how-to-check-national-surplus-funds-records",
    title: "How to Check Whether a Property Sale Created Surplus Funds in Another State",
    excerpt:
      "Surplus recovery is no longer limited to Florida. If a tax sale or foreclosure involved property you owned in another state, these records can help you find out whether excess proceeds are still being held.",
    content: `
Florida is often associated with tax deed surplus claims, but property-sale surpluses also occur across the country. The terminology and filing process change from state to state. A county may call the money excess proceeds, overage, surplus funds, or an unapplied balance. The first step is to identify the sale and the office responsible for the funds.

## Start with the property records

Gather the property address, the county and state, the former owner's name, and an approximate date of the tax sale or foreclosure. If you have a notice, deed, court document, mortgage statement, or auction record, keep the case number with your notes.

Search the official website for the county clerk, treasurer, sheriff, tax collector, or court. Use terms such as "tax sale surplus," "excess proceeds," "foreclosure surplus," and "unclaimed funds." Some offices publish a list. Others require a written request or a search by case number.

## Identify the event that created the surplus

A tax sale usually follows unpaid property taxes or other public charges. A foreclosure sale follows a mortgage judgment or another secured debt. The distinction matters because different offices may hold the money and different procedures may apply.

For example, a tax-sale surplus might be handled by a county treasurer, while a foreclosure surplus may remain in the court case or be deposited with a sheriff or trustee. Do not assume that a tax deed claim form will work for a mortgage foreclosure.

## Confirm that the funds are still available

A public list is only a starting point. Ask the responsible office:

- Whether the sale produced excess proceeds
- The current amount being held, if the office can provide it
- The deadline and method for filing a claim
- Whether the money has moved to a state or county unclaimed-property program
- Whether other lienholders or claimants are listed

Keep copies of your requests and the responses. Record the name of the office, the date you contacted it, and any case or reference number.

## Gather proof before filing

The office may require proof that the claimant was the former owner or is a lawful successor. Common documents include government-issued identification, ownership records, a death certificate and probate documents for an heir, a notarized claim form, and a completed tax form. Requirements differ, so obtain the current instructions directly from the office holding the funds.

A deadline that applies in one state may not apply in another. Florida's 120-day surplus-notice rule should not be treated as a national deadline. Some jurisdictions use a court motion, while others use an administrative application. Filing with the wrong office or using the wrong procedure can delay review.

## When a professional review may help

A national surplus search can involve multiple counties, older addresses, name changes, estate records, and lien questions. King's Equity Partners now reviews tax-sale and foreclosure surplus opportunities nationwide. We identify the sale type, locate the responsible office, and check the state-specific process before discussing available options.

You can begin with the official records yourself. This article is general educational information, not legal advice, and does not guarantee that funds exist or that a claim will succeed.
    `.trim(),
    author: "Charles King III",
    date: "2026-07-24",
    readTime: "5 min",
    category: "National",
    tags: ["surplus funds", "tax sale", "foreclosure", "national", "public records"],
  },
  {
    slug: "documents-needed-for-national-surplus-claim",
    title: "What Documents May Be Needed for a National Surplus Claim?",
    excerpt:
      "A surplus claim may require more than a completed form. Learn which ownership, identity, estate, and sale records are commonly requested when a tax sale or foreclosure occurs outside Florida.",
    content: `
A tax sale or foreclosure surplus claim usually starts with a claim form, but the responsible office may ask for additional records before releasing money. Requirements vary by state, county, sale type, and claimant. Gathering the basic documents early can help you understand what is missing and avoid sending sensitive information to the wrong office.

## Start with proof of identity

Most offices require a government-issued photo identification document. The name on the identification should match the former owner's name in the public records, or you should be prepared to explain a name change. A marriage certificate, divorce decree, or court order may help connect two versions of a person's name.

Do not send an original identity document unless the office's written instructions specifically require it. Use the official mailing address or online submission method listed by the office holding the funds.

## Show the connection to the property or sale

The office may request records showing that the claimant owned the property or held an interest when the sale occurred. Depending on the jurisdiction, useful records may include:

- A recorded deed or property tax record
- The tax sale certificate, tax deed, foreclosure judgment, or auction notice
- The court case number or sale reference number
- A closing statement, mortgage record, or other document identifying the former owner

A property address alone may not be enough. Offices often need the legal owner's name and a document that connects that person to the specific sale.

## Prepare for estate or successor claims

If the former owner died, an heir or personal representative may need a death certificate, probate records, letters of administration, a will, or documentation showing the right to act for the estate. The required proof depends on state law and whether probate has been opened.

Do not assume that being a relative automatically gives someone authority to collect the funds. The office may require records identifying all heirs or a court-appointed representative. When an estate is involved, professional legal advice may be appropriate.

## Account for liens and other claimants

A junior lienholder, judgment creditor, or other interested party may have a claim against surplus proceeds. The responsible office may request lien releases, payoff information, a court order, or documents showing the priority of competing interests. A claimant should not sign a statement about liens without reviewing the applicable records and instructions.

## Check the current instructions

Document lists are not identical across the country. A Florida tax deed claim packet should not be used for a foreclosure surplus in another state without confirming the local procedure. Ask the office holding the funds for its current form, deadline, notarization rules, mailing address, and required attachments.

Make copies of everything you submit and keep proof of delivery. King's Equity Partners reviews tax-sale and foreclosure surplus opportunities nationwide, including the responsible office and state-specific claim process, before discussing available options. This article is general educational information, not legal advice, and does not guarantee that funds exist or that a claim will succeed.
    `.trim(),
    author: "Charles King III",
    date: "2026-08-21",
    readTime: "5 min",
    category: "National",
    tags: ["surplus claim", "documents", "tax sale", "foreclosure", "national"],
  },
  {
    slug: "what-happens-after-a-national-surplus-claim-is-filed",
    title: "What Happens After You File a National Surplus Claim?",
    excerpt:
      "Filing a tax-sale or foreclosure surplus claim is only the beginning. Learn what usually happens next, which records may be reviewed, and why the timeline depends on the state and type of sale.",
    content: `
Submitting a surplus claim does not always lead to an immediate payment. After a tax sale or foreclosure, the office holding the excess proceeds must review the claim under the rules for that state and type of sale. The next steps can be administrative, court-based, or a combination of both.

## The office checks the claim packet

The first review usually focuses on whether the form is complete and whether the claimant appears to have the right connection to the property or sale. The reviewer may check the claimant's name, address, identification, signature, notarization, case number, and supporting ownership records.

If the former owner has died, the office may also review a death certificate, probate documents, letters of administration, or other proof of authority. A family relationship by itself may not establish the right to receive the funds. Each state has its own rules for heirs, personal representatives, and successors.

## The office may notify other interested parties

Surplus proceeds can involve more than one possible claimant. A mortgage holder, junior lienholder, judgment creditor, bankruptcy trustee, or another party may assert an interest in the money. The responsible office may send notices, request additional documents, or wait for a court to decide competing claims.

That does not mean a claim will fail. It means the funds may not be released until the priority or validity of the competing interests is resolved. A claimant should not assume that an amount shown on a public sale record is the amount they will receive.

## The claim may be approved, returned, or sent to court

After review, the office may approve the claim, ask for corrections, return an incomplete packet, or require a court filing. Some jurisdictions use an administrative application. Others require a motion, petition, hearing, or judge's order, particularly when the ownership history or competing claims are disputed.

If the packet is returned, read the reason carefully and note any new deadline. Correcting a missing signature is different from responding to a lien dispute or an estate issue. Keep copies of the submitted documents, delivery confirmation, and all correspondence.

## Payment timing varies widely

There is no single national processing time. A straightforward claim may move in weeks, while a claim involving an estate, lien, court hearing, or incomplete records may take substantially longer. The office holding the money can provide the most reliable status information for that specific case.

Before filing, confirm the office's current instructions, required documents, deadline, payment method, and contact procedure. Do not rely on Florida's 120-day rule when the property sale occurred elsewhere. Tax-sale and foreclosure surplus procedures can differ even within the same state.

King's Equity Partners reviews tax-sale and foreclosure surplus opportunities nationwide. We identify the sale type, locate the responsible office, and review the applicable state process before discussing available options. This article is general educational information, not legal advice, and does not guarantee that funds exist or that a claim will succeed.
    `.trim(),
    author: "Charles King III",
    date: "2026-08-28",
    readTime: "5 min",
    category: "National",
    tags: ["surplus claim", "tax sale", "foreclosure", "national", "claim process"],
  },
  {
    slug: "why-the-name-on-the-property-record-matters",
    title: "Why the Name on the Property Record Matters in a National Surplus Claim",
    excerpt:
      "A name mismatch can slow a tax-sale or foreclosure surplus claim, but it does not always mean the claim is impossible. Learn which records can help connect your identity to the property and why the responsible office's requirements control.",
    content: `
Public records do not always show a property owner's name exactly as it appears on a current driver's license or tax document. A middle name may be missing. A former last name may still appear on a deed. The property may have been held jointly, through a trust, or by a company. These differences matter when someone asks an office to release surplus proceeds.

## The relevant name is tied to the sale

A claim usually depends on showing who owned the property or held a recognized interest when the tax sale or foreclosure occurred. The name on a recent record is helpful, but it may not answer every question. The responsible office may review the deed, tax records, foreclosure case, tax sale documents, or other records connected to the specific sale.

For example, a person may have bought the property under one name and later changed their name. Two spouses may appear as co-owners. A trust or limited liability company may be listed instead of an individual. If the former owner died, an heir or personal representative may need to show both the deceased owner's connection to the property and the authority to act.

## Common name issues

A reviewer may ask for more information when:

- The claim form uses a different spelling or name format than the deed
- The owner changed their name after the deed was recorded
- The property was owned by more than one person
- A trust, estate, or business entity appears in the ownership records
- The claimant is an heir, successor, or authorized representative

A name difference is not automatically a rejection. It is a signal to gather the records that explain the connection before filing.

## Records that may help

Depending on the jurisdiction and sale type, useful documents may include a recorded deed, government-issued identification, a marriage certificate or court order showing a name change, trust or entity records, a death certificate, probate documents, or a document appointing a personal representative. The office holding the funds decides which documents it will accept and whether notarization, certified copies, or additional forms are required.

Do not send sensitive documents to a person or company simply because they say money is available. Confirm the sale and the responsible office through reliable public records, then use the office's current instructions for submitting a claim. Keep copies of everything you send and proof of delivery.

## National claims require local instructions

There is no single national form for tax-sale and foreclosure surplus claims. A county clerk's process in Florida may differ from a county treasurer's or court's process in another state. Deadlines, successor rules, document requirements, and payment procedures can vary even when the underlying issue looks similar.

King's Equity Partners reviews tax-sale and foreclosure surplus opportunities nationwide. We identify the sale type, review the ownership records, and locate the responsible office before discussing available options. This article is general educational information, not legal advice, and does not guarantee that funds exist or that a claim will succeed.
    `.trim(),
    author: "Charles King III",
    date: "2026-09-04",
    readTime: "5 min",
    category: "National",
    tags: ["surplus claim", "ownership records", "tax sale", "foreclosure", "national"],
  },
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
