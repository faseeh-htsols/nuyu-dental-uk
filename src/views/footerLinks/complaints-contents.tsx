import Link from "next/link";

const Complaints = () => {
  return (
    <div className="WordSection1 container mt-5 mb-5">
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          It is our aim to always have satisfied patients, to meet your
          expectations of care and service and to resolve any complaints as
          efficiently, effectively and politely as possible. We take complaints
          very seriously, investigating them in a full and fair way and take
          great care to protect your confidentiality. We learn from complaints
          to improve our care and service. We will never discriminate against
          patients who have made a complaint and we will be happy to answer any
          questions you may have about this procedure.
        </span>
      </p>
      <br />
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          If you are not entirely satisfied with any aspect of our care or
          service, please let us know as soon as possible to allow us to address
          your concerns promptly. We accept complaints made verbally as well as
          written complaints.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          Natalia Agalakova is the Complaints Manager and will be your personal
          contact to assist you with any complaints. We aim to resolve verbal
          complaints within 24 hours where possible, but if you complain in
          writing the Complaints Manager will send an acknowledgement letter
          within 3 working days and will aim to provide a full response in
          writing as soon as practical.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          You can send your complaints to NUYU Dental & Aesthetics, 64
          Winchcombe Street, Cheltenham, GL52 2ND or email the Complaints
          Manager at&nbsp;
          <a href="mailto:info@nuyu-dental.co.uk">info@nuyu-dental.co.uk</a>.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          If the Complaints Manager is unavailable, we will take brief details
          about the complaint and will arrange for a meeting when it is suitable
          for you and the practice. We will keep comprehensive and confidential
          records of your complaint, which will be stored securely and only be
          accessible by those who need to know about your complaint. If the
          complaint investigation takes longer than anticipated, the Complaints
          Manager will contact you at least every ten working day to keep you
          informed of the reason for any delays, the progress of the
          investigation and the proposed date it will be completed.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          When the investigation has been completed, you will be informed of its
          outcome in writing. We will make our response clear, addressing each
          of your concerns as best as we can. You will also be invited to a
          meeting to discuss the results and any practical solutions that we can
          offer to you. These solutions could include replacing treatment,
          refunding fees paid, referring you for specialist treatments or other
          solutions that meet your needs and resolve the complaint.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          We regularly analyse patient complaints to learn from them and to
          improve our services. That’s why we always welcome your feedback,
          comments, suggestions and complaints. If you are dissatisfied with our
          response to a complaint you can take the matter further, please see
          the contacts below.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          If you are dissatisfied with our response to a complaint you can
          contact the GDC private dental complaints service within 12 months of
          the treatment or within 12 months of becoming aware of the issue.
          Please see the contact details below.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <b>
          <span lang="EN-GB">&nbsp;</span>
        </b>
      </p>
      <p className="font-quicksand font-medium">
        <h2>
          <span lang="EN-GB">
            Contacts
            <br />
          </span>
        </h2>
        <span lang="EN-GB">
          GDC private dental complaints service can be contacted by calling 020
          8253 0800 or visiting&nbsp;
          <Link
            className="text-blue underline"
            href="http://www.dentalcomplaints.org.uk/">
            www.dentalcomplaints.org.uk
          </Link>
          .
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">
          You can also contact the&nbsp;
          <Link className="text-blue underline" href="http://www.cqc.org.uk/">
            Care Quality Commission
          </Link>
          &nbsp;(CQC) who regulates private and NHS dental care services in
          England by calling 03000 616161. They can take action against a
          service provider that is not meeting their standards.&nbsp;The General
          Dental Council is responsible for regulating all dental professionals.
          You can complain using their online form at&nbsp;
          <Link
            className="text-blue underline"
            href="http://contactus.gdc-uk.org/Enquiry/SelectType">
            www.gdc-uk.org
          </Link>
          &nbsp;contact them on information@gdc-org.uk or by calling 020 7167
          6000.
        </span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
      <p className="font-quicksand font-medium">
        <span lang="EN-GB">&nbsp;</span>
      </p>
    </div>
  );
};

export default Complaints;
